function useFetch () {
  const fetcher = async (endpoint, options = {}) => {
    const response = await fetch(`http://localhost:8080/api/v1/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json'
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
