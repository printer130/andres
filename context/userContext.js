import { createContext, useEffect, useState, useContext } from 'react'
import { onAuthStateChanged } from '../firebase/client'
import { useRouter } from 'next/router'

const CounterContext = createContext()

export const useAuth = () => useContext(CounterContext)

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    let unsubscribe
    unsubscribe = onAuthStateChanged(setUser)
    return () => unsubscribe && unsubscribe()
  }, [setUser])

  const value = {
    user,
    setUser
  }

  return <CounterContext.Provider value={value}>
    {children}
  </CounterContext.Provider>
}
