import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import useFetch from '../../shared/hooks/useFetch'
import { useAuth } from '../../app/context/auth'

function useLogin () {
  const { login: loginCtx } = useAuth()
  const { fetcher } = useFetch()
  const [isLoading, setIsLoading] = useState(false)
  const [loginValues, setLoginValues] = useState({ email: '', password: '' })

  const { data, isError, error, refetch } = useQuery(['auth'], login, { enabled: false })

  useEffect(() => {
    data && loginCtx(data)
    setIsLoading(false)
  }, [data, isError])

  useEffect(() => {
    if (loginValues.email && loginValues.password) {
      refetch()
    }
  }, [loginValues, refetch])

  async function login () {
    setIsLoading(true)
    const body = JSON.stringify(loginValues)

    const data = await fetcher('user/login', {
      method: 'POST',
      body
    })

    return data
  }

  return {
    setLoginValues,
    isLoading,
    isError,
    error
  }
}

export default useLogin
