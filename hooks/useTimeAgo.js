import { useEffect, useState } from 'react'

const DATA_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getDateDiffs = timestamp => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATA_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)
      return {
        value,
        unit
      }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeago, setTimeago] = useState(() =>
    getDateDiffs(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeago(newTimeAgo)
    }, 5000)
    return () => clearInterval(interval)
  }, [timestamp])
  // rtf.format(value, unit)
  // console.log(value, unit)
  const rtf = new Intl.RelativeTimeFormat('es', {
  })
  const { value, unit } = timeago
  return rtf.format(value, unit)
}

