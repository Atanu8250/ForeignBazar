import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const {authState} = useContext(AuthContext)

    if(!authState.isAuth){
        return <Navigate to="/signin"/>
    }

    return children;
}

export default PrivateRoute