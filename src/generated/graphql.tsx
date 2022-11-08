import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type CategoryProduct = {
  __typename?: 'CategoryProduct';
  cloudId: Scalars['String'];
  condition: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type CategoryProductCreateInput = {
  description: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type CategoryProductUpdateInput = {
  condition: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Float'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  data: Array<CategoryProduct>;
  total: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  celular: Scalars['String'];
  cloudId: Scalars['String'];
  condition: Scalars['Boolean'];
  dni: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  rol: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Response;
  confirm: Response;
  createCategory: CategoryProduct;
  createProduct: Product;
  deleteCategory: Response;
  deleteProduct: Response;
  deleteUser: Response;
  login: LoginResponse;
  recoveryPassword: Response;
  refreshToken: LoginResponse;
  register: Response;
  updateCategory: Response;
  updateCategoryCondition: Response;
  updateProduct: Response;
  updateUser: Response;
};


export type MutationChangePasswordArgs = {
  passowrd: Scalars['String'];
};


export type MutationConfirmArgs = {
  token: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  input: CategoryProductCreateInput;
};


export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoveryPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: UserCreateInput;
};


export type MutationUpdateCategoryArgs = {
  input: CategoryProductUpdateInput;
};


export type MutationUpdateCategoryConditionArgs = {
  condition: Scalars['Boolean'];
  id: Scalars['Float'];
};


export type MutationUpdateProductArgs = {
  input: ProductUpdateInput;
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String'];
  calification: Scalars['String'];
  cloudId: Scalars['String'];
  condition: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
};

export type ProductCreateInput = {
  brand: Scalars['String'];
  calification: Scalars['String'];
  description: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  data: Array<Product>;
  total: Scalars['String'];
};

export type ProductUpdateInput = {
  brand: Scalars['String'];
  calification: Scalars['String'];
  condition: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Float'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategorys: CategoryResponse;
  getAllProducts: ProductResponse;
  getAllUsers: UsersResponse;
  getCategoryId: CategoryProduct;
  getProductId: Product;
  getUserId: User;
};


export type QueryGetAllCategorysArgs = {
  numberPage: Scalars['Float'];
  page: Scalars['Float'];
};


export type QueryGetAllProductsArgs = {
  numberPage: Scalars['Float'];
  page: Scalars['Float'];
};


export type QueryGetAllUsersArgs = {
  numberPage: Scalars['Float'];
  page: Scalars['Float'];
};


export type QueryGetCategoryIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetProductIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserIdArgs = {
  id: Scalars['Float'];
};

export type Response = {
  __typename?: 'Response';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  celular: Scalars['String'];
  cloudId: Scalars['String'];
  condition: Scalars['Boolean'];
  dni: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  rol: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type UserCreateInput = {
  celular: Scalars['String'];
  dni: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  rol: Scalars['String'];
  username: Scalars['String'];
};

export type UserUpdateInput = {
  celular: Scalars['String'];
  dni: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Float'];
  image?: InputMaybe<Scalars['Upload']>;
  lastname: Scalars['String'];
  name: Scalars['String'];
  rol: Scalars['String'];
  username: Scalars['String'];
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  data: Array<User>;
  total: Scalars['String'];
};

export type CreateCategoryMutationVariables = Exact<{
  input: CategoryProductCreateInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'CategoryProduct', id: number, name: string, description: string, condition: boolean, image: string } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'Response', success: boolean, message: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', id: number, name: string, lastname: string, username: string, email: string, dni: string, celular: string, gender: string, image: string, cloudId: string, condition: boolean, token: string, rol: string } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginResponse', id: number, name: string, lastname: string, username: string, email: string, dni: string, celular: string, gender: string, image: string, cloudId: string, condition: boolean, token: string, rol: string } };

export type UpdateCategoryConditionMutationVariables = Exact<{
  id: Scalars['Float'];
  condition: Scalars['Boolean'];
}>;


export type UpdateCategoryConditionMutation = { __typename?: 'Mutation', updateCategoryCondition: { __typename?: 'Response', success: boolean, message: string } };

export type GetAllCategorysQueryVariables = Exact<{
  numberPage: Scalars['Float'];
  page: Scalars['Float'];
}>;


export type GetAllCategorysQuery = { __typename?: 'Query', getAllCategorys: { __typename?: 'CategoryResponse', total: string, data: Array<{ __typename?: 'CategoryProduct', id: number, name: string, description: string, condition: boolean, image: string }> } };


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
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

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
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Float!) {
  deleteCategory(id: $id) {
    success
    message
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    id
    name
    lastname
    username
    email
    dni
    celular
    gender
    image
    cloudId
    condition
    token
    rol
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    id
    name
    lastname
    username
    email
    dni
    celular
    gender
    image
    cloudId
    condition
    token
    rol
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateCategoryConditionDocument = gql`
    mutation UpdateCategoryCondition($id: Float!, $condition: Boolean!) {
  updateCategoryCondition(id: $id, condition: $condition) {
    success
    message
  }
}
    `;
export type UpdateCategoryConditionMutationFn = Apollo.MutationFunction<UpdateCategoryConditionMutation, UpdateCategoryConditionMutationVariables>;

/**
 * __useUpdateCategoryConditionMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryConditionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryConditionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryConditionMutation, { data, loading, error }] = useUpdateCategoryConditionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateCategoryConditionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryConditionMutation, UpdateCategoryConditionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryConditionMutation, UpdateCategoryConditionMutationVariables>(UpdateCategoryConditionDocument, options);
      }
export type UpdateCategoryConditionMutationHookResult = ReturnType<typeof useUpdateCategoryConditionMutation>;
export type UpdateCategoryConditionMutationResult = Apollo.MutationResult<UpdateCategoryConditionMutation>;
export type UpdateCategoryConditionMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryConditionMutation, UpdateCategoryConditionMutationVariables>;
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
    `;

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
export function useGetAllCategorysQuery(baseOptions: Apollo.QueryHookOptions<GetAllCategorysQuery, GetAllCategorysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategorysQuery, GetAllCategorysQueryVariables>(GetAllCategorysDocument, options);
      }
export function useGetAllCategorysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategorysQuery, GetAllCategorysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategorysQuery, GetAllCategorysQueryVariables>(GetAllCategorysDocument, options);
        }
export type GetAllCategorysQueryHookResult = ReturnType<typeof useGetAllCategorysQuery>;
export type GetAllCategorysLazyQueryHookResult = ReturnType<typeof useGetAllCategorysLazyQuery>;
export type GetAllCategorysQueryResult = Apollo.QueryResult<GetAllCategorysQuery, GetAllCategorysQueryVariables>;