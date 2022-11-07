import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategorysQuery
} from '@generated/graphql'

interface IProps {
  page?: number
  numberPage?: number
}

interface ICreateCategory {
  image: any
  name: string
  description: string
}

// Obtenemos todas las categorias
export const useCategoy = ({ page = 1, numberPage = 10 }: IProps) => {
  const { data, loading, refetch } = useGetAllCategorysQuery({
    fetchPolicy: 'network-only',
    variables: {
      page,
      numberPage
    }
  })

  const dataCategory = data?.getAllCategorys?.data ?? []

  const [CreateCategory, { loading: loadingCreate }] = useCreateCategoryMutation()

  const createCategory = async ({ image, name, description }: ICreateCategory) => {
    try {
      const res = await CreateCategory({
        variables: {
          input: {
            image,
            name,
            description
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo crear la categoria' }
    }
  }

  const [DeleteCategory, { loading: loadingDelete }] = useDeleteCategoryMutation()

  const deleteCategory = async ({ deleteCategoryId }: { deleteCategoryId: number }) => {
    try {
      const res = await DeleteCategory({
        variables: {
          deleteCategoryId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar la categoria' }
    }
  }

  return {
    loading,
    dataCategory,
    createCategory,
    loadingCreate,
    deleteCategory,
    loadingDelete
  }
}
