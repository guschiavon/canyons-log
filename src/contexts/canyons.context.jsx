import { createContext, useState } from "react";

import CANYONS from '../canyons.json'

export const CanyonsContext = createContext({
  canyons: []
})

export const CanyonsProvider = ({ children }) => {
  const [canyons, setCanyons] = useState(CANYONS)
  const data = { canyons }
  return (
    <CanyonsContext.Provider value={data}>{children}</CanyonsContext.Provider>
  )
}