import useLocalSttorage from '@/shared/hooks/useLocalStorage'

function useFetch () {
  const { getValue } = useLocalSttorage()

  const fetcher = async (endpoint, options = {}) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    if (options.token) {
      headers.Authorization = `Bearer ${getValue('user').token}`
      delete options.token
    }
    console.log(headers)
    const response = await fetch(`http://localhost:8080/api/v1/${endpoint}`, {
      headers: {
        ...headers
      },
      ...options
    })

    if (response.status >= 400) {
      const { message } = await response.json()
      return Promise.reject(message)
    }

    return await response.json()
  }

  return {
    fetcher
  }
}

export default useFetch
