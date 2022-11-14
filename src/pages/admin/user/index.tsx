import Image from '@components/shared/Img/Image'
import ModalDelete from '@components/shared/Modal/ModalDelete'
import PlantillaAdmin from '@components/shared/PlantillaAdmin/PlantillaAdmin'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import useToggle from '@hooks/useToggle'
import { IconEdit, IconTrash } from '@icons'
import { useUser } from '@services/useUser'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Toast } from 'src/utils/Toast'

const User = () => {
  const { dataAllUser, loading, deleteUser, loadingDelete } = useUser({
    page: 1,
    numberPage: 10
  })
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<number | null>(null)

  const handleDelete = () => {
    deleteUser({ id: selectId! }).then((res) => {
      if (res.ok) {
        Toast({ type: 'success', message: 'Eliminado correctamente' })
      } else {
        Toast({ type: 'error', message: res?.error })
      }
    })
  }

  return (
    <PlantillaAdmin title="Usuarios" desc="Desde aqui podras visualizar todos los usuarios">
      <Show
        condition={loading}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        <Table>
          <thead>
            <tr className="dark:border-b-slate-700">
              <th className="text-center">Imagen</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellido</th>
              <th className="text-center">Usuario</th>
              <th className="text-center">Email</th>
              <th className="text-center">DNI</th>
              <th className="text-center">Celular</th>
              <th className="text-center">Genero</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataAllUser?.map((item) => (
              <tr
                key={item.id}
                className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                <td className="text-center">
                  <Image className="object-cover w-12 mx-auto" src={item?.image} alt="imgs" />
                </td>
                <td className="text-center ">{item?.name}</td>
                <td className="text-center ">{item?.lastname}</td>
                <td className="text-center ">{item?.username}</td>
                <td className="text-center ">{item?.email}</td>
                <td className="text-center ">{item?.dni}</td>
                <td className="text-center ">{item?.celular}</td>
                <td className="text-center ">{item?.gender}</td>
                <td>
                  <div className="flex justify-center gap-x-3">
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
                    header="Eliminar usuario"
                    body="¿Estas seguro que deseas eliminar este usuario?"
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

export default User
