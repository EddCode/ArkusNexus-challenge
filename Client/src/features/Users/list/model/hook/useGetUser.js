import useFetch from '@/shared/hooks/useFetch'
import { useQuery } from '@tanstack/react-query'
import { useUserCtx } from '@/app/context/user'
import { useEffect } from 'react'

function useGetUser () {
  const { fetcher } = useFetch()
  const { setUser } = useUserCtx()
  const { data, error, isLoading, isError } = useQuery(['users'], getUsers)

  useEffect(() => data?.data && setUser(data.data), [data])

  async function getUsers () {
    const response = await fetcher('user', {
      token: true,
      method: 'GET'
    })
    return response
  }

  return {
    error,
    isLoading,
    isError
  }
}

export default useGetUser
