import useForm from '@hooks/useForm'
import React from 'react'
import { loginValidation } from '@validation/loginValidation'
import Modal from '.'
import Input from '../Input'
import { useCallback } from 'react'
import { loginAction } from '@store/slices/authslice'
import { useDispatch } from '@hooks/reduxhooks'
import { useRouter } from 'next/router'
import { Toast } from 'src/utils/Toast'
import { useLogin } from '@services/useLogin'
import Spinner from '../Spinner/Spinner'

const ModalLogin = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { values, setField, clearErrors, clear, ...form } = useForm({
    initialValues: { email: '', password: '', name: '', lastname: '', type: 'login' },
    validate: loginValidation
  })
  const dispatch = useDispatch()
  const { login, loading, register, loadingRegister, recoveryPassword, loadingRecoveryPassword } =
    useLogin()

  const router = useRouter()

  const handleSubmit = () => {
    const { type: typeId, ...resValues } = values

    if (type('login')) {
      login({ email: values.email, password: values.password }).then((res) => {
        if (res.ok) {
          onClose()

          localStorage.setItem('token', res.data?.token!)

          dispatch(loginAction(res?.data!))

          Toast({ type: 'success', message: 'Correcto' })

          if (res?.data?.rol === 'admin') {
            router.push('/admin')
          }
        }
        Toast({ type: 'error', message: res.error! })
      })
    }

    if (type('register')) {
      register({ ...resValues }).then((res) => {
        if (res.ok) {
          Toast({ type: 'success', message: 'Correcto' })
          setField('type', 'login')
        }
        Toast({ type: 'error', message: res.error! })
      })
    }

    if (type('recovery')) {
      recoveryPassword({ email: values.email }).then((res) => {
        if (res.ok) {
          Toast({ type: 'success', message: 'Correcto' })
          setField('type', 'login')
        }
        Toast({ type: 'error', message: res.error! })
      })
    }
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
        className="flex flex-col w-full gap-5 p-5 bg-white rounded-lg lg:w-96 ">
        <h1 className="text-2xl font-bold text-center text-primary-500">
          {type('login')
            ? 'Iniciar sesión'
            : type('register')
            ? 'Regístrate'
            : 'Recuperar Contraseña'}
        </h1>
        {type('register') && (
          <>
            <Input type="text" label="name" {...form.inputProps('name')} />

            <Input type="text" label="lastname" {...form.inputProps('lastname')} />
          </>
        )}

        <Input type="text" label="Correo" {...form.inputProps('email')} />

        {type('login') || type('register') ? (
          <Input type="password" label="Password" {...form.inputProps('password')} />
        ) : null}
        <button
          type="submit"
          className="btn btn-solid-primary"
          disabled={loading || loadingRegister || loadingRecoveryPassword}>
          {type('login')
            ? 'Iniciar sesión'
            : type('register')
            ? 'Regístrate'
            : 'Recuperar Contraseña'}

          {loading && <Spinner className="w-5 h-5" />}
          {loadingRegister && <Spinner className="w-5 h-5" />}
          {loadingRecoveryPassword && <Spinner className="w-5 h-5" />}
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
