import {
  ProductCreateInput,
  useCreateCategoryMutation,
  useCreateProductMutation,
  useDeleteCategoryMutation,
  useGetAllCategorysQuery,
  useGetAllProductsQuery,
  useGetCategoryIdQuery,
  useUpdateCategoryConditionMutation,
  useUpdateCategoryMutation
} from '@generated/graphql'

interface IProps {
  page?: number
  numberPage?: number
  id?: number
}

// Obtenemos todas las categorias
export const useProduct = ({ page = 1, numberPage = 10, id = 0 }: IProps) => {
  const {
    data: dataAll,
    loading,
    refetch
  } = useGetAllProductsQuery({
    fetchPolicy: 'network-only',
    variables: {
      page,
      numberPage
    }
  })

  //const { data: dataId, loading: loadingCategoryId } = useGetCategoryIdQuery({
  //  fetchPolicy: 'network-only',
  //  variables: {
  //    id
  //  }
  //})

  const dataAllProduct = dataAll?.getAllProducts?.data ?? []
  //const dataCategoryId = dataId?.getCategoryId

  const [CreateProduct, { loading: loadingCreate }] = useCreateProductMutation()

  const createProduct = async ({
    image,
    name,
    description,
    brand,
    price,
    stock,
    category
  }: ProductCreateInput) => {
    try {
      await CreateProduct({
        variables: {
          input: {
            image,
            name,
            description,
            brand,
            price,
            stock,
            category
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
    }
  }

  //const [UpdateCategoryCondition, { loading: loadingUpdateCondition }] =
  //  useUpdateCategoryConditionMutation()

  //const updateCategoryCondition = async ({ id, condition }: { id: number; condition: boolean }) => {
  //  try {
  //    const res = await UpdateCategoryCondition({
  //      variables: {
  //        id,
  //        condition
  //      }
  //    })
  //    refetch()
  //    return { ok: true }
  //  } catch (error: any) {
  //    return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
  //  }
  //}

  //const [UpdateCategory, { loading: loadingUpdate }] = useUpdateCategoryMutation()

  //const updateCategory = async ({ image, name, description, id }: IUpdateCategory) => {
  //  try {
  //    const res = await UpdateCategory({
  //      variables: {
  //        input: {
  //          id,
  //          image,
  //          name,
  //          description
  //        }
  //      }
  //    })
  //    refetch()
  //    return { ok: true }
  //  } catch (error: any) {
  //    return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
  //  }
  //}

  //const [DeleteCategory, { loading: loadingDelete }] = useDeleteCategoryMutation()

  //const deleteCategory = async ({ id }: { id: number }) => {
  //  try {
  //    const res = await DeleteCategory({
  //      variables: {
  //        id
  //      }
  //    })
  //    refetch()
  //    return { ok: true }
  //  } catch (error: any) {
  //    return { ok: false, error: error?.graphQLErrors[0]?.message || 'Hubo un error' }
  //  }
  //}

  return {
    loading,
    dataAllProduct,
    createProduct,
    loadingCreate
    //deleteCategory,
    //loadingDelete,
    //updateCategoryCondition,
    //loadingUpdateCondition,
    //loadingCategoryId,
    //dataCategoryId,
    //updateCategory,
    //loadingUpdate
  }
}
