
export const useGetTime = (seconds) => {
  const y = new Date(seconds * 1000).getFullYear()
  const d = new Date(seconds * 1000).getDay()
  const m = new Date(seconds * 1000).getMonth()
  const h = new Date(seconds * 1000).getHours()
  const min = new Date(seconds * 1000).getMinutes()

  return {
    y, d, m, h, min
  }
}