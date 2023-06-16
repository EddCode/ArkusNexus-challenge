import useFetch from '@/shared/hooks/useFetch'

function useGetOneUser () {
  const { fetcher } = useFetch()

  const submit = async (id) => {
    try {
      const result = await fetcher(`user/${id}`, { token: true, method: 'GET' })

      return result.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    submit
  }
}

export default useGetOneUser
