import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";



export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  const [currentUser,setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)        
      }
      setCurrentUser(user)
      console.log("current user updated to: ", user)
    })
    return unsubscribe
  }, [])
  console.log("Render UserProvider with currentUser:", currentUser); // Log the initial state
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}
