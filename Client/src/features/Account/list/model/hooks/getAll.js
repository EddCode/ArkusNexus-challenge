import { useAuth } from '@/app/context/auth'
import useFetcher from '@/shared/hooks/useFetch'

function useGetAll () {
  const { user: { token } } = useAuth()
  const { fetcher } = useFetcher()

  const getAll = async () => {
    const { data } = await fetcher('accounts', { token })
    return data
  }

  return getAll
}

export default useGetAll
