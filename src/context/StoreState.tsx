import useRefreshToken from '@hooks/useRefreshToken'
import React, { createContext, useContext, useState } from 'react'

export interface StoreInitialState {
  loading: boolean
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export interface StoreContextValue extends StoreInitialState {}
export const initialState: StoreInitialState = { loading: false }

const StoreContext = createContext<StoreContextValue>({} as StoreContextValue)

const StoreState = ({ children }: Props) => {
  const { loading } = useRefreshToken()

  return (
    <StoreContext.Provider
      value={{
        loading
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)

export default StoreState
