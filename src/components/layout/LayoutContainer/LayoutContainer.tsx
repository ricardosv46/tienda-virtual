import Spinner from '@components/shared/Spinner/Spinner'
import { useSelector } from '@hooks/reduxhooks'
import useRefreshToken from '@hooks/useRefreshToken'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'
import { useStoreContext } from 'src/context/StoreState'
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin'
import LayoutHome from '../LayoutHome/LayoutHome'

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const { isAuth, user } = useSelector((state) => state.auth)
  const router = useRouter()
  const { loading } = useStoreContext()

  useEffect(() => {
    if (user?.rol !== 'admin') {
      router.push('/')
    }
  }, [])

  if (loading)
    return (
      <div className="fixed grid w-screen h-screen place-items-center">
        <Spinner className="w-10 h-10 mx-auto my-20 border-4" />
      </div>
    )

  return (
    <>
      {isAuth && user?.rol === 'admin' ? (
        <LayoutAdmin>{children}</LayoutAdmin>
      ) : (
        <LayoutHome>{children}</LayoutHome>
      )}
    </>
  )
}

export default LayoutContainer
