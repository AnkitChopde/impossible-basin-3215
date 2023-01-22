import React, { createContext, useState } from 'react'


export const AuthContext = createContext(); 


const AuthContextProvider = ({children}) => {
const [isauth,setIsAuth] = useState({
   isAuth:false,
   token:null
}) 

const login = (token)=>{
    setIsAuth({
        ...isauth,
        isAuth:true,
        token
    })
}

const logout = ()=>{
   setIsAuth( {
    ...isauth,
    isAuth:false,
    token:null
 })
}

  return <AuthContext.Provider value={{isauth:isauth,login,logout}}>
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider