import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoute = ({children}) => {
    const {isauth} = useContext(AuthContext);

    if(!isauth.isAuth){
        return <Navigate to="/signin"/>
    }

  return children
}

export default PrivateRoute