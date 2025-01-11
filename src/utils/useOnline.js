import { useEffect, useState } from 'react'


const useOnline = () => {
  const [isOnline, setisOnline] = useState(true)

  useEffect(() => {

    const handleOnline = () => {
      setisOnline(false)
    }
    const handleOffline = () => {
      setisOnline(true)
    }
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline;
}
export default useOnline;