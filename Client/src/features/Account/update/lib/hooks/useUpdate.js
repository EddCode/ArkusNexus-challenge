import useFetch from '@/shared/hooks/useFetch'

function useUpdate () {
  const { fetcher } = useFetch()

  const submit = async (user, id) => {
    try {
      await fetcher(`accounts/${id}`, { token: true, method: 'PATCH', body: JSON.stringify(user) })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    submit
  }
}

export default useUpdate
