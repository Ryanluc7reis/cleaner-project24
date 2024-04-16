import { createContext, useState } from 'react'

export const RegionContext = createContext()

export function RegionProvider({ children }) {
  const [region, setRegion] = useState(false)
  return <RegionContext.Provider value={[region, setRegion]}>{children}</RegionContext.Provider>
}
