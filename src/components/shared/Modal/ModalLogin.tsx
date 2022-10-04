import useForm from '@hooks/useForm'
import React from 'react'
import { loginValidation } from '@validation/loginValidation'
import Modal from '.'
import Input from '../Input'
import { useCallback } from 'react'

const ModalLogin = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { values, setField, clearErrors, clear, ...form } = useForm({
    initialValues: { email: '', password: '', nombres: '', apellidos: '', type: 'login' },
    validate: loginValidation
  })

  const handleSubmit = async () => {
    console.log(values)
  }

  const type = useCallback(
    (type: string) => {
      return values.type === type
    },
    [values.type]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-5 p-5 bg-white rounded-lg w-96 ">
        <h1 className="text-2xl font-bold text-center text-primary-500">
          {type('login')
            ? 'Iniciar sesión'
            : type('register')
            ? 'Regístrate'
            : 'Recuperar Contraseña'}
        </h1>
        {type('register') && (
          <>
            <Input type="text" label="Nombres" {...form.inputProps('nombres')} />

            <Input type="text" label="Apellidos" {...form.inputProps('apellidos')} />
          </>
        )}

        <Input type="text" label="Correo" {...form.inputProps('email')} />

        {type('login') || type('register') ? (
          <Input type="password" label="Password" {...form.inputProps('password')} />
        ) : null}
        <button type="submit" className="btn btn-solid-primary">
          {type('login')
            ? 'Iniciar sesión'
            : type('register')
            ? 'Regístrate'
            : 'Recuperar Contraseña'}
        </button>
        <p className="">
          {type('login') ? 'Si no tienes una cuenta ' : 'Si ya tienes una cuenta '}
          <span
            onClick={() => {
              clearErrors()
              clear()
              type('login') ? setField('type', 'register') : setField('type', 'login')
            }}
            className="text-primary-500 hover:cursor-pointer">
            {type('login') ? 'regístrate aquí' : 'ingrese por aquí'}
          </span>
        </p>
        <span
          onClick={() => {
            clearErrors()
            clear()
            setField('type', 'recovery')
          }}
          className="text-primary-500 hover:cursor-pointer">
          ¿Olvidaste tu contraseña?
        </span>
      </form>
    </Modal>
  )
}

export default ModalLogin
