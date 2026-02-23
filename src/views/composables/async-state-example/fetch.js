import { ref, toValue, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  async function fetchData() {
    try {
      const res = await fetch(toValue(url))
      data.value = await res.json()
    } catch (e) {
      error.value = e
    }
  }

  watchEffect(() => {
    void fetchData()
  })

  return {
    data,
    error,
  }
}
