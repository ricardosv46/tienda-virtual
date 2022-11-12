import Input from '@components/shared/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaAdmin from '@components/shared/PlantillaAdmin/PlantillaAdmin'
import Spinner from '@components/shared/Spinner/Spinner'
import useForm from '@hooks/useForm'
import { useCategoy } from '@services/useCategoy'
import { categoryValidation } from '@validation/categoryValidation'

import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Toast } from 'src/utils/Toast'

const Create = () => {
  const { createCategory, loadingCreate } = useCategoy({})

  const { values, setField, clearErrors, clear, errors, touched, ...form } = useForm({
    initialValues: {
      description: '',
      name: '',
      image: null
    },
    validate: categoryValidation
  })

  const router = useRouter()

  const handleSubmit = async () => {
    createCategory({
      ...values
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado correctamente' })
        router.push('/admin/category')
      } else {
        Toast({ type: 'error', message: 'No se puedo crear' })
      }
    })
  }

  console.log('values', { ...values })

  return (
    <PlantillaAdmin title="Crear Categoría" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Categoría</h1>
      </div>
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
            Crear Categoría
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaAdmin>
  )
}

export default Create
