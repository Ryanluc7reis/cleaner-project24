import { createContext, useState } from 'react'

export const PopUpContext = createContext()

export function PopUpProvider({ children }) {
  const [popUpMessage, setPopUpMessage] = useState(false)
  const [popUpMessageCard, setPopUpMessageCard] = useState(false)
  return (
    <PopUpContext.Provider
      value={[popUpMessage, setPopUpMessage, popUpMessageCard, setPopUpMessageCard]}
    >
      {children}
    </PopUpContext.Provider>
  )
}
