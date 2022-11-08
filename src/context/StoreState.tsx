import useRefreshToken from '@hooks/useRefreshToken'
import React, { createContext, useContext, useState } from 'react'

export interface StoreInitialState {
  // isOpen: boolean
  loading: boolean
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export interface StoreContextValue extends StoreInitialState {
  // loading: boolean
  // openModal: () => void
  // closeModal: () => void
  // toggleModal: () => void
  // changeModal: (payload: boolean) => void
}
export const initialState: StoreInitialState = {
  // isOpen: false
  loading: false
}

const StoreContext = createContext<StoreContextValue>({} as StoreContextValue)

const StoreState = ({ children }: Props) => {
  const loading = false

  // const [state, setState] = useState(initialState)

  // const openModal = async () => {
  //   setState((prev) => ({ ...prev, isOpen: true }))
  // }
  // const closeModal = async () => {
  //   setState((prev) => ({ ...prev, isOpen: false }))
  // }

  // const toggleModal = async () => {
  //   setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  // }

  // const changeModal = async (payload: boolean) => {
  //   setState((prev) => ({ ...prev, isOpen: payload }))
  // }

  return (
    <StoreContext.Provider
      value={{
        loading
        // ...state,
        // openModal,
        // closeModal,
        // toggleModal,
        // changeModal
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)

export default StoreState
