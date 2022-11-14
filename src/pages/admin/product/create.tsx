import Input from '@components/shared/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaAdmin from '@components/shared/PlantillaAdmin/PlantillaAdmin'
import Select from '@components/shared/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import useForm from '@hooks/useForm'
import { useCategoy } from '@services/useCategoy'
import { useProduct } from '@services/useProduct'
import { productValidation } from '@validation/productValidation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Toast } from 'src/utils/Toast'

const Create = () => {
  const { createProduct, loadingCreate } = useProduct({})
  const { dataAllCategory, loading } = useCategoy({
    page: 1,
    numberPage: 20
  })

  const { values, setField, clearErrors, clear, errors, touched, ...form } = useForm({
    initialValues: {
      description: '',
      name: '',
      image: null,
      brand: '',
      price: '',
      stock: '',
      category: ''
    },
    validate: productValidation
  })

  const router = useRouter()

  const handleSubmit = async () => {
    console.log({ ...values, price: +values.price, stock: +values.stock })
    createProduct({
      ...values,
      category: Number(values.category),
      price: Number(values.price),
      stock: Number(values.stock)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado correctamente' })
        router.push('/admin/product')
      } else {
        Toast({ type: 'error', message: res?.error })
      }
    })
  }

  return (
    <PlantillaAdmin title="Crear Producto" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Producto</h1>
      </div>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col w-full max-w-3xl mx-auto mt-10 gap-7 md:grid sm:grid-cols-2 ">
        <Input type="text" label="Nombre" {...form.inputProps('name')} />

        <Input type="text" label="Descripción" {...form.inputProps('description')} />

        <Input type="text" label="Marca" {...form.inputProps('brand')} />

        <Select
          label="Categoria"
          value={values.category}
          options={dataAllCategory}
          onChange={({ value }) => {
            setField('category', value)
          }}
          dataExtractor={{
            label: 'name',
            value: 'id'
          }}
          error={errors.category}
        />

        <Input type="text" label="Precio" {...form.inputProps('price')} />

        <Input type="text" label="Stok" {...form.inputProps('stock')} />

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
            Crear Producto
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaAdmin>
  )
}

export default Create
