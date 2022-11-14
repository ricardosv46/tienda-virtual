import Image from '@components/shared/Img/Image'
import ModalDelete from '@components/shared/Modal/ModalDelete'
import PlantillaAdmin from '@components/shared/PlantillaAdmin/PlantillaAdmin'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import useToggle from '@hooks/useToggle'
import { IconEdit, IconTrash } from '@icons'
import { useCategoy } from '@services/useCategoy'
import { useProduct } from '@services/useProduct'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Toast } from 'src/utils/Toast'

const Category = () => {
  const { dataAllProduct, loading } = useProduct({
    page: 1,
    numberPage: 10
  })
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<number | null>(null)

  //const handleDelete = () => {
  //  deleteCategory({ id: selectId! }).then((res) => {
  //    if (res.ok) {
  //      Toast({ type: 'success', message: 'Eliminado correctamente' })
  //    } else {
  //      Toast({ type: 'error', message: 'No se pudo eliminar' })
  //    }
  //  })
  //}

  //const handleUpdateCondition = ({ id, condition }: { id: number; condition: boolean }) => {
  //  updateCategoryCondition({ id, condition }).then((res) => {
  //    if (res.ok) {
  //      Toast({ type: 'success', message: 'Actualizado correctamente' })
  //    } else {
  //      Toast({ type: 'error', message: 'No se pudo actualizar' })
  //    }
  //  })
  //}

  return (
    <PlantillaAdmin
      title="Productos"
      desc="Desde aqui podras visualizar todos los productos"
      button={
        <Link href="product/create">
          <button type="button" className="self-end w-full mb-3 btn btn-solid-primary sm:w-max">
            <FaPlus />
            Crear Producto
          </button>
        </Link>
      }>
      <Show
        condition={loading}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        <Table>
          <thead>
            <tr className="dark:border-b-slate-700">
              <th className="text-center">Imagen</th>
              <th className="text-center">Titulo</th>
              <th className="text-center">Descripción</th>
              <th className="text-center">Marca</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Stock</th>
              <th className="text-center">Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataAllProduct?.map((item) => (
              <tr
                key={item.id}
                className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                <td className="text-center">
                  <Image className="object-cover w-12 mx-auto" src={item?.image} alt="imgs" />
                </td>
                <td className="text-center ">{item?.name}</td>
                <td className="text-center ">{item?.description}</td>
                <td className="text-center ">{item?.brand}</td>
                <td className="text-center ">{item?.price}</td>
                <td className="text-center ">{item?.stock}</td>
                <td>
                  <div className="flex justify-center ">
                    <ToggleSwitch
                      onClick={() => {
                        //handleUpdateCondition({ id: item?.id, condition: !item?.condition })
                      }}
                      value={item?.condition}
                    />
                  </div>
                </td>

                <td>
                  <div className="flex justify-center gap-x-3">
                    <button
                      className="btn-icon btn-ghost-primary"
                      onClick={() => router.push(`category/${item?.id}`)}>
                      <IconEdit />
                    </button>

                    <button
                      className="btn-icon btn-ghost-primary"
                      //disabled={loadingDelete}
                      onClick={() => {
                        onOpen()
                        setSelectId(item?.id)
                      }}>
                      <IconTrash />
                    </button>
                  </div>

                  <ModalDelete
                    isOpen={isOpen}
                    onClick={() => {}}
                    //onClick={handleDelete}
                    onClose={onClose}
                    header="Eliminar categoría"
                    body="¿Estas seguro que deseas eliminar esta categoría?"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Show>
    </PlantillaAdmin>
  )
}

export default Category
