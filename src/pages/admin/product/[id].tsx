import Input from '@components/shared/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaAdmin from '@components/shared/PlantillaAdmin/PlantillaAdmin'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import useForm from '@hooks/useForm'
import { useCategoy } from '@services/useCategoy'
import { categoryValidation } from '@validation/categoryValidation'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Toast } from 'src/utils/Toast'

const Edit = () => {
  const router = useRouter()
  const id = router.query.id as string

  const { dataCategoryId, loadingCategoryId, updateCategory, loadingCreate } = useCategoy({
    id: Number(id),
    numberPage: 0,
    page: 0
  })

  useEffect(() => {
    if (!router.isReady) return
  }, [])

  const { values, setField, clearErrors, clear, errors, touched, setFields, ...form } = useForm({
    initialValues: {
      description: '',
      name: '',
      image: null
    },
    validate: categoryValidation
  })

  const handleSubmit = async () => {
    updateCategory({
      ...values,
      image: typeof values?.image === 'string' ? null : values?.image,
      id: Number(id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado correctamente' })
        router.push('/admin/category')
      } else {
        Toast({ type: 'error', message: res?.error })
      }
    })
  }

  useEffect(() => {
    if (!loadingCategoryId) {
      if (dataCategoryId?.id! === Number(id)) {
        console.log({ dataCategoryId })
        setFields({
          name: dataCategoryId?.name,
          description: dataCategoryId?.description,
          image: (dataCategoryId?.image as any) || null
        })
      } else {
        router.push('/admin/category')
      }
    }
  }, [loadingCategoryId])

  return (
    <PlantillaAdmin title="Editar Producto" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Producto</h1>
      </div>
      <Show
        condition={loadingCategoryId}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col w-full max-w-3xl mx-auto mt-10 gap-7 md:grid sm:grid-cols-2 ">
          <Input type="text" label="Nombre" {...form.inputProps('name')} />

          <Input type="text" label="Descripción" {...form.inputProps('description')} />

          <div className="flex w-full col-span-2 mx-auto md:w-1/2">
            <InputImage
              label="Imagen"
              value={values.image}
              onChange={(value) => setField('image', value)}
              error={errors.image}
            />
          </div>

          <div className="flex items-center justify-center col-span-2">
            <button
              type="submit"
              disabled={loadingCreate}
              className="w-full md:w-1/2 btn btn-solid-primary">
              Actualizar Producto
              {loadingCreate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaAdmin>
  )
}

export default Edit
