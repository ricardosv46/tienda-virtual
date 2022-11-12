import { LoginInput, useLoginMutation } from '@generated/graphql'

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

  return {
    login,
    loading
  }
}
