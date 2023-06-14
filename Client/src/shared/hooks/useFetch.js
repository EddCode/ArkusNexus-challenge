function useFetch () {
  const fetcher = async (endpoint, options = {}) => {
    const response = await fetch(`http://localhost:8080/api/v1/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      ...options
    })
<<<<<<< HEAD
    const data = await response.json()
    return data
=======

    if (response.status >= 400) {
      const { message } = await response.json()
      return Promise.reject(message)
    }

    return await response.json()
>>>>>>> 7c3aff0 (features)
  }

  return {
    fetcher
  }
}

export default useFetch
