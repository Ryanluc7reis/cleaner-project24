import { createContext, useState } from 'react'

export const PopUpSignupContext = createContext()

export function PopUpSignupProvider({ children }) {
  const [popUpMessageSignup, setPopUpMessageSignup] = useState(false)

  return (
    <PopUpSignupContext.Provider value={[popUpMessageSignup, setPopUpMessageSignup]}>
      {children}
    </PopUpSignupContext.Provider>
  )
}
