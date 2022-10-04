import { FormError } from '@hooks/useForm'
import { isEmail, isEmpty } from '@utils'

export interface Login {
  email: string
  password: string
  type: string
  nombres: string
  apellidos: string
}

export const loginValidation = ({ email, password, type, apellidos, nombres }: Login) => {
  const errors: FormError<Login> = {}

  const isLogin = type === 'login'
  const isRegister = type === 'register'
  const isRecovery = type === 'recovery'

  if (isRegister) {
    if (isEmpty(nombres)) {
      errors.nombres = 'El campo es requerido'
    }
    if (isEmpty(apellidos)) {
      errors.apellidos = 'El campo es requerido'
    }
  }

  if (isLogin || isRegister) {
    if (isEmpty(email)) {
      errors.email = 'El campo es requerido'
    }

    if (!isEmpty(email) && !isEmail(email)) {
      errors.email = 'El email no es valido'
    }

    if (isEmpty(password)) {
      errors.password = 'El campo es requerido'
    }
  }

  if (isRecovery) {
    if (isEmpty(email)) {
      errors.email = 'El campo es requerido'
    }

    if (!isEmpty(email) && !isEmail(email)) {
      errors.email = 'El email no es valido'
    }
  }

  return errors
}

// const type = useCallback(
//   (type: string) => {
//     return values.type === type
//   },
//   [values.type]
// )
