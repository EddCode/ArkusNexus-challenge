import useFetch from '@/shared/hooks/useFetch'

function useCreate () {
  const { fetcher } = useFetch()

  const submit = async (user) => {
    try {
      await fetcher('user', { token: true, method: 'POST', body: JSON.stringify(user) })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    submit
  }
}

export default useCreate
