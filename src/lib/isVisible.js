import { useEffect, useState } from 'react'

export default function useOnScreen(ref, options) {
  const [isIntersecting, setIntersecting] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    )
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
