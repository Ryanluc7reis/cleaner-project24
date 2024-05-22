import { createContext, useState } from 'react'

export const DateContext = createContext()

export function DateProvider({ children }) {
  const [date, setDate] = useState('')
  return <DateContext.Provider value={[date, setDate]}>{children}</DateContext.Provider>
}
