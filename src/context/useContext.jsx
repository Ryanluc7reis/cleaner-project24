import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(false)
  return <UserContext.Provider value={[userData, setUserData]}>{children}</UserContext.Provider>
}
