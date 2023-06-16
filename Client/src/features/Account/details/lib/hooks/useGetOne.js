import useFetch from '@/shared/hooks/useFetch'

function useGetOneAccount () {
  const { fetcher } = useFetch()

  const submit = async (id) => {
    try {
      const result = await fetcher(`accounts/${id}`, { token: true, method: 'GET' })

      return result.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    submit
  }
}

export default useGetOneAccount
