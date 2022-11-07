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
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Toast } from 'src/utils/Toast'

const Category = () => {
  const { dataCategory, loading, deleteCategory, loadingDelete } = useCategoy({
    page: 1,
    numberPage: 10
  })
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<number | null>(null)

  const router = useRouter()

  const handleDelete = () => {
    deleteCategory({ deleteCategoryId: selectId! }).then((res) => {
      if (res.ok) {
        Toast({ type: 'success', message: 'Eliminado correctamente' })
      } else {
        Toast({ type: 'error', message: 'No se pudo eliminar' })
      }
    })
  }

  return (
    <PlantillaAdmin
      title="Categoría Blogs"
      desc="Desde aqui podras visualizar todas las categorías de los blogs"
      button={
        <button
          onClick={() => router.push('category/create')}
          className="self-end w-full mb-3 btn btn-solid-primary sm:w-max">
          <FaPlus />
          Crear Categoría
        </button>
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
              <th className="text-center">Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataCategory.map((item) => (
              <tr
                key={item.id}
                className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                <td className="text-center">
                  <Image className="object-cover w-12 mx-auto" src={item?.image} alt="imgs" />
                </td>
                <td className="text-center ">{item?.name}</td>

                <td className="text-center ">{item?.description}</td>

                <td>
                  <div className="flex justify-center ">
                    <ToggleSwitch onClick={() => {}} value={item.condition} />
                  </div>
                </td>

                <td>
                  <div className="flex justify-center gap-x-3">
                    <button
                      className="btn-icon btn-ghost-primary"
                      // onClick={() => router(`edit-blog-category/${item.slug}`)}
                    >
                      <IconEdit />
                    </button>

                    <button
                      className="btn-icon btn-ghost-primary"
                      disabled={loadingDelete}
                      onClick={() => {
                        onOpen()
                        setSelectId(item?.id)
                      }}>
                      <IconTrash />
                    </button>
                  </div>

                  <ModalDelete
                    isOpen={isOpen}
                    onClick={handleDelete}
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
