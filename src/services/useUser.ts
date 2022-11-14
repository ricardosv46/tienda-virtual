import {
  useDeleteCategoryMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery
} from '@generated/graphql'

interface IProps {
  page: number
  numberPage: number
}

// Obtenemos todas los usuarios
export const useUser = ({ page = 1, numberPage = 10 }: IProps) => {
  const {
    data: dataAll,
    loading,
    refetch
  } = useGetAllUsersQuery({
    fetchPolicy: 'network-only',
    variables: {
      page,
      numberPage
    }
  })

  const dataAllUser = dataAll?.getAllUsers?.data ?? []

  const [DeleteUser, { loading: loadingDelete }] = useDeleteUserMutation()

  const deleteUser = async ({ id }: { id: number }) => {
    try {
      const res = await DeleteUser({
        variables: {
          id
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  return {
    loading,
    deleteUser,
    loadingDelete,
    dataAllUser
  }
}
