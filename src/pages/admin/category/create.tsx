import Input from '@components/shared/Input'
import PlantillaAdmin from '@components/shared/PlantillaAdmin/PlantillaAdmin'
import Spinner from '@components/shared/Spinner/Spinner'
import useForm from '@hooks/useForm'
import { useCategoy } from '@services/useCategoy'
import React, { useState } from 'react'
import { Toast } from 'src/utils/Toast'

const Create = () => {
  const { createCategory, loadingCreate } = useCategoy({})
  const [newImage, setnewImage] = useState(null)

  const { values, setField, clearErrors, clear, ...form } = useForm({
    initialValues: {
      description: '',
      name: ''
    }
  })

  const handleSubmit = async () => {
    createCategory({
      ...values,
      image: newImage
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado correctamente' })
      } else {
        Toast({ type: 'error', message: 'No se puedo crear' })
      }
    })
  }

  return (
    <PlantillaAdmin title="Crear Categoría" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Categoría</h1>
      </div>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col w-full max-w-3xl gap-8 mx-auto mt-10 ">
        <Input type="text" label="Nombre" {...form.inputProps('name')} />

        <Input type="text" label="Descripción" {...form.inputProps('description')} />

        <input
          type="file"
          name=""
          id=""
          onChange={(e: any) => {
            setnewImage(e.target.files[0])
          }}
        />
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
