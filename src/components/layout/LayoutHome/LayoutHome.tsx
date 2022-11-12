import Spinner from '@components/shared/Spinner/Spinner'
import { useSelector } from '@hooks/reduxhooks'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { useEffect } from 'react'
import { useStoreContext } from 'src/context/StoreState'
import Navbar from '../Navbar'

const LayoutHome = ({ children }: { children: ReactNode }) => {
  const { user } = useSelector((state) => state.auth)
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
      <Navbar />
      <>{children}</>
    </>
  )
}

export default LayoutHome
