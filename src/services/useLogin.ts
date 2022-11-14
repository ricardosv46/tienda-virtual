import {
  LoginInput,
  useLoginMutation,
  useRecoveryPasswordMutation,
  useRegisterMutation
} from '@generated/graphql'

export interface UserCreateInput {
  email: string
  password: string
  name: string
  lastname: string
}
// Obtenemos todas las categorias
export const useLogin = () => {
  const [Login, { loading }] = useLoginMutation()

  const login = async ({ email, password }: LoginInput) => {
    try {
      const res = await Login({
        variables: {
          input: {
            email,
            password
          }
        }
      })

      return { ok: true, data: res.data?.login }
    } catch (error: any) {
      console.log({ error })
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  const [Register, { loading: loadingRegister }] = useRegisterMutation()
  const register = async ({ email, password, name, lastname }: UserCreateInput) => {
    try {
      await Register({
        variables: {
          input: {
            email,
            password,
            celular: '',
            dni: '',
            gender: '',
            name,
            lastname,
            rol: 'customer',
            username: '',
            image: null
          }
        }
      })

      return { ok: true }
    } catch (error: any) {
      console.log({ error })
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  const [RecoveryPassword, { loading: loadingRecoveryPassword }] = useRecoveryPasswordMutation()
  const recoveryPassword = async ({ email }: { email: string }) => {
    try {
      await RecoveryPassword({
        variables: {
          email
        }
      })

      return { ok: true }
    } catch (error: any) {
      console.log({ error })
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  return {
    login,
    loading,
    register,
    loadingRegister,
    recoveryPassword,
    loadingRecoveryPassword
  }
}
