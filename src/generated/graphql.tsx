import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export type CategoryProduct = {
  __typename?: 'CategoryProduct'
  condition: Scalars['Boolean']
  description: Scalars['String']
  id: Scalars['Float']
  image: Scalars['String']
  name: Scalars['String']
}

export type CategoryProductCreateInput = {
  description: Scalars['String']
  image?: InputMaybe<Scalars['Upload']>
  name: Scalars['String']
}

export type CategoryProductUpdateInput = {
  condition: Scalars['Boolean']
  description: Scalars['String']
  id: Scalars['Float']
  image?: InputMaybe<Scalars['Upload']>
  name: Scalars['String']
}

export type CategoryResponse = {
  __typename?: 'CategoryResponse'
  data: Array<CategoryProduct>
  total: Scalars['String']
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  email: Scalars['String']
  lastname: Scalars['String']
  token: Scalars['String']
  username: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  changePassword: Response
  confirm: Response
  createCategory: CategoryProduct
  createProduct: Product
  deleteCategory: Response
  deleteProduct: Response
  deleteUser: Response
  login: LoginResponse
  recoveryPassword: Response
  register: Response
  updateCategory: Response
  updateProduct: Response
  updateUser: Response
}

export type MutationChangePasswordArgs = {
  passowrd: Scalars['String']
}

export type MutationConfirmArgs = {
  token: Scalars['String']
}

export type MutationCreateCategoryArgs = {
  input: CategoryProductCreateInput
}

export type MutationCreateProductArgs = {
  input: ProductCreateInput
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']
}

export type MutationDeleteProductArgs = {
  id: Scalars['Float']
}

export type MutationDeleteUserArgs = {
  id: Scalars['Float']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRecoveryPasswordArgs = {
  email: Scalars['String']
}

export type MutationRegisterArgs = {
  input: UserCreateInput
}

export type MutationUpdateCategoryArgs = {
  input: CategoryProductUpdateInput
}

export type MutationUpdateProductArgs = {
  input: ProductUpdateInput
}

export type MutationUpdateUserArgs = {
  input: UserUpdateInput
}

export type Product = {
  __typename?: 'Product'
  brand: Scalars['String']
  calification: Scalars['String']
  condition: Scalars['Boolean']
  description: Scalars['String']
  id: Scalars['Float']
  image: Scalars['String']
  name: Scalars['String']
  price: Scalars['Float']
  stock: Scalars['Float']
}

export type ProductCreateInput = {
  brand: Scalars['String']
  calification: Scalars['String']
  description: Scalars['String']
  image?: InputMaybe<Scalars['Upload']>
  name: Scalars['String']
  price: Scalars['Float']
  stock: Scalars['Float']
}

export type ProductResponse = {
  __typename?: 'ProductResponse'
  data: Array<Product>
  total: Scalars['String']
}

export type ProductUpdateInput = {
  brand: Scalars['String']
  calification: Scalars['String']
  condition: Scalars['Boolean']
  description: Scalars['String']
  id: Scalars['Float']
  image?: InputMaybe<Scalars['Upload']>
  name: Scalars['String']
  price: Scalars['Float']
  stock: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  getAllCategorys: CategoryResponse
  getAllProducts: ProductResponse
  getAllUsers: UsersResponse
  getCategoryId: CategoryProduct
  getProductId: Product
  getUserId: User
}

export type QueryGetAllCategorysArgs = {
  numberPage: Scalars['Float']
  page: Scalars['Float']
}

export type QueryGetAllProductsArgs = {
  numberPage: Scalars['Float']
  page: Scalars['Float']
}

export type QueryGetAllUsersArgs = {
  numberPage: Scalars['Float']
  page: Scalars['Float']
}

export type QueryGetCategoryIdArgs = {
  id: Scalars['Float']
}

export type QueryGetProductIdArgs = {
  id: Scalars['Float']
}

export type QueryGetUserIdArgs = {
  id: Scalars['Float']
}

export type Response = {
  __typename?: 'Response'
  message: Scalars['String']
  success: Scalars['Boolean']
}

export type User = {
  __typename?: 'User'
  celular: Scalars['String']
  condition: Scalars['Boolean']
  dni: Scalars['String']
  email: Scalars['String']
  gender: Scalars['String']
  id: Scalars['Float']
  image: Scalars['String']
  lastname: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  rol: Scalars['String']
  token: Scalars['String']
  username: Scalars['String']
}

export type UserCreateInput = {
  celular: Scalars['String']
  dni: Scalars['String']
  email: Scalars['String']
  gender: Scalars['String']
  image?: InputMaybe<Scalars['Upload']>
  lastname: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  rol: Scalars['String']
  username: Scalars['String']
}

export type UserUpdateInput = {
  celular: Scalars['String']
  dni: Scalars['String']
  email: Scalars['String']
  gender: Scalars['String']
  id: Scalars['Float']
  image?: InputMaybe<Scalars['Upload']>
  lastname: Scalars['String']
  name: Scalars['String']
  rol: Scalars['String']
  username: Scalars['String']
}

export type UsersResponse = {
  __typename?: 'UsersResponse'
  data: Array<User>
  total: Scalars['String']
}

export type CreateCategoryMutationVariables = Exact<{
  input: CategoryProductCreateInput
}>

export type CreateCategoryMutation = {
  __typename?: 'Mutation'
  createCategory: {
    __typename?: 'CategoryProduct'
    id: number
    name: string
    description: string
    condition: boolean
    image: string
  }
}

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginResponse'
    username: string
    email: string
    lastname: string
    token: string
  }
}

export type DeleteCategoryMutationVariables = Exact<{
  deleteCategoryId: Scalars['Float']
}>

export type DeleteCategoryMutation = {
  __typename?: 'Mutation'
  deleteCategory: { __typename?: 'Response'; success: boolean; message: string }
}

export type GetAllCategorysQueryVariables = Exact<{
  numberPage: Scalars['Float']
  page: Scalars['Float']
}>

export type GetAllCategorysQuery = {
  __typename?: 'Query'
  getAllCategorys: {
    __typename?: 'CategoryResponse'
    total: string
    data: Array<{
      __typename?: 'CategoryProduct'
      id: number
      name: string
      description: string
      condition: boolean
      image: string
    }>
  }
}

export const CreateCategoryDocument = gql`
  mutation CreateCategory($input: CategoryProductCreateInput!) {
    createCategory(input: $input) {
      id
      name
      description
      condition
      image
    }
  }
`
export type CreateCategoryMutationFn = Apollo.MutationFunction<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(
    CreateCategoryDocument,
    options
  )
}
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      username
      email
      lastname
      token
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const DeleteCategoryDocument = gql`
  mutation DeleteCategory($deleteCategoryId: Float!) {
    deleteCategory(id: $deleteCategoryId) {
      success
      message
    }
  }
`
export type DeleteCategoryMutationFn = Apollo.MutationFunction<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      deleteCategoryId: // value for 'deleteCategoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(
    DeleteCategoryDocument,
    options
  )
}
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>
export const GetAllCategorysDocument = gql`
  query GetAllCategorys($numberPage: Float!, $page: Float!) {
    getAllCategorys(numberPage: $numberPage, page: $page) {
      data {
        id
        name
        description
        condition
        image
      }
      total
    }
  }
`

/**
 * __useGetAllCategorysQuery__
 *
 * To run a query within a React component, call `useGetAllCategorysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategorysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategorysQuery({
 *   variables: {
 *      numberPage: // value for 'numberPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetAllCategorysQuery(
  baseOptions: Apollo.QueryHookOptions<GetAllCategorysQuery, GetAllCategorysQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllCategorysQuery, GetAllCategorysQueryVariables>(
    GetAllCategorysDocument,
    options
  )
}
export function useGetAllCategorysLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategorysQuery, GetAllCategorysQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllCategorysQuery, GetAllCategorysQueryVariables>(
    GetAllCategorysDocument,
    options
  )
}
export type GetAllCategorysQueryHookResult = ReturnType<typeof useGetAllCategorysQuery>
export type GetAllCategorysLazyQueryHookResult = ReturnType<typeof useGetAllCategorysLazyQuery>
export type GetAllCategorysQueryResult = Apollo.QueryResult<
  GetAllCategorysQuery,
  GetAllCategorysQueryVariables
>
