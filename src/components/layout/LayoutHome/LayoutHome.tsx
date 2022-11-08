import { useSelector } from '@hooks/reduxhooks'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar'

const LayoutHome = ({ children }: { children: ReactNode }) => {
  const { isAuth, user } = useSelector((state) => state.auth)
  console.log({ isAuth, user })
  const router = useRouter()

  useEffect(() => {
    if (!isAuth && user?.rol !== 'admin') {
      router.push('/')
    }
  }, [])

  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  )
}

export default LayoutHome
