import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategorysQuery,
  useUpdateCategoryConditionMutation
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

  const deleteCategory = async ({ id }: { id: number }) => {
    try {
      const res = await DeleteCategory({
        variables: {
          id
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar la categoria' }
    }
  }

  const [UpdateCategoryCondition, { loading: loadingUpdateCondition }] =
    useUpdateCategoryConditionMutation()

  const updateCategoryCondition = async ({ id, condition }: { id: number; condition: boolean }) => {
    try {
      const res = await UpdateCategoryCondition({
        variables: {
          id,
          condition
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
    loadingDelete,
    updateCategoryCondition,
    loadingUpdateCondition
  }
}
