import react, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from '../firebase/client'

export const useUser = () => {

  const [user, setUser] = useState(undefined)
  const router = useRouter()
  // const userT = useContext(UserContextProvider)

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(setUser)

    user === null && router.replace('/')

    return () => unsubscribe()

  }, [setUser])

  return user
}