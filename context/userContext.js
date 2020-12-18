import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from '../firebase/client'

const CounterContex = createContext({})
export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [setUser])

  let auth = false

  if (user?.uid === '6wcsUOM163dqLVHVbP4y0jtdwJ72') {
    auth = true
  }

  const value = {
    user,
    setUser,
    auth
  }

  return <CounterContex.Provider value={value}>
    {children}
  </CounterContex.Provider>
}

export default {
  Provider: UserContextProvider,
  Consumer: CounterContex.Consumer
}
