import { createContext, useState } from 'react'

export const CardIdContext = createContext()

export function CardIdProvider({ children }) {
  const [cardId, setCardId] = useState(false)
  return <CardIdContext.Provider value={[cardId, setCardId]}>{children}</CardIdContext.Provider>
}
