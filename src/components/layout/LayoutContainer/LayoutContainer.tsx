import Spinner from '@components/shared/Spinner/Spinner'
import { useSelector } from '@hooks/reduxhooks'
import useRefreshToken from '@hooks/useRefreshToken'
import React, { ReactNode } from 'react'
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin'
import LayoutHome from '../LayoutHome/LayoutHome'

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const { isAuth, user } = useSelector((state) => state.auth)

  const { loading } = useRefreshToken()

  console.log({ loading, isAuth, user })

  if (loading)
    return (
      <div className="fixed grid w-screen h-screen place-items-center">
        <Spinner className="w-10 h-10 mx-auto my-20 border-4" />
      </div>
    )

  return (
    <>
      {isAuth && user.rol === 'admin' ? (
        <LayoutAdmin>{children}</LayoutAdmin>
      ) : (
        <LayoutHome>{children}</LayoutHome>
      )}
    </>
  )
}

export default LayoutContainer
