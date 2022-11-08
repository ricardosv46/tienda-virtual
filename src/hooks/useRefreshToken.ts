import { useEffect, useState } from 'react'
import { useRefreshTokenMutation } from '@generated/graphql'
import { useDispatch } from './reduxhooks'
import { loginAction } from '@store/slices/authslice'
import { useRouter } from 'next/router'

const useRefreshToken = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [refreshToken] = useRefreshTokenMutation()
  const [mainLoading, setMainLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token') ?? null

    if (!token) return setMainLoading(false)

    refreshToken()
      .then((user) => {
        setMainLoading(false)
        if (user.data?.refreshToken?.token) {
          localStorage.setItem('token', user.data.refreshToken?.token)
          dispatch(loginAction(user.data?.refreshToken))
          router.replace(router.pathname)
        }
      })
      .catch((err) => {
        console.log({ err })
        setMainLoading(false)
        localStorage.removeItem('token')
      })
  }, [])

  return { loading: mainLoading }
}

export default useRefreshToken
