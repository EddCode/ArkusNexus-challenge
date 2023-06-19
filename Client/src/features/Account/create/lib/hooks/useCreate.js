import useFetch from '@/shared/hooks/useFetch'

function useCreate () {
  const { fetcher } = useFetch()

  const submit = async (account) => {
    try {
      const { data } = await fetcher('accounts', { token: true, method: 'POST', body: JSON.stringify(account) })
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    update: submit
  }
}

export const useListUsers = () => {
  const { fetcher } = useFetch()

  const list = async () => {
    try {
      const { data } = await fetcher('user', { token: true, method: 'GET' })
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return list
}

export default useCreate
