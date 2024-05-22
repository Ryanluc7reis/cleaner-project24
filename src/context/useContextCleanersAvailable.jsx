import { createContext, useState } from 'react'

export const CleanerAvailable = createContext()

export function CleanerAvailableProvider({ children }) {
  const [cleaners, setCleaner] = useState(0)
  return (
    <CleanerAvailable.Provider value={[cleaners, setCleaner]}>{children}</CleanerAvailable.Provider>
  )
}
