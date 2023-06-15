import useFetch from '@/shared/hooks/useFetch'
import { useQuery } from '@tanstack/react-query'

function useGetUser () {
  const { fetcher } = useFetch()
  const { data, error, isLoading, isError } = useQuery(['users'], getUsers)

  async function getUsers () {
    const response = await fetcher('user', {
      token: true,
      method: 'GET'
    })
    return response
  }

  return {
    users: data || { data: [] },
    error,
    isLoading,
    isError
  }
}

export default useGetUser
