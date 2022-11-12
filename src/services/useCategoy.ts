import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategorysQuery,
  useGetCategoryIdQuery,
  useUpdateCategoryConditionMutation,
  useUpdateCategoryMutation
} from '@generated/graphql'

interface IProps {
  page?: number
  numberPage?: number
  id?: number
}
interface ICreateCategory {
  image: any
  name: string
  description: string
}
interface IUpdateCategory {
  description: string
  id: number
  image: any
  name: string
}

// Obtenemos todas las categorias
export const useCategoy = ({ page = 1, numberPage = 10, id = 0 }: IProps) => {
  const {
    data: dataAll,
    loading,
    refetch
  } = useGetAllCategorysQuery({
    fetchPolicy: 'network-only',
    variables: {
      page,
      numberPage
    }
  })

  const { data: dataId, loading: loadingCategoryId } = useGetCategoryIdQuery({
    fetchPolicy: 'network-only',
    variables: {
      id
    }
  })

  const dataAllCategory = dataAll?.getAllCategorys?.data ?? []
  const dataCategoryId = dataId?.getCategoryId

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
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
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
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  const [UpdateCategory, { loading: loadingUpdate }] = useUpdateCategoryMutation()

  const updateCategory = async ({ image, name, description, id }: IUpdateCategory) => {
    try {
      const res = await UpdateCategory({
        variables: {
          input: {
            id,
            image,
            name,
            description
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
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
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  return {
    loading,
    dataAllCategory,
    createCategory,
    loadingCreate,
    deleteCategory,
    loadingDelete,
    updateCategoryCondition,
    loadingUpdateCondition,
    loadingCategoryId,
    dataCategoryId,
    updateCategory,
    loadingUpdate
  }
}
