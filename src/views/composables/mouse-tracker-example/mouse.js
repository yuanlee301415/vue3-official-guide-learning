import { onMounted, ref } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(evt) {
    x.value = evt.pageX
    y.value = evt.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  return {
    x,
    y,
  }
}
