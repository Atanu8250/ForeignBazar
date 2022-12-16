import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

const AuthContextProvider = ({children})=>{

    const ui = localStorage.getItem('logged-in user-id');

    const [token, setToken] = useState(ui || "")
    const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState(ui ? true : false);

    const authState = {token, isAuth}

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
        .then(res => {
            res.data.forEach((el)=>{
                if(el.userId == token){
                    setUser(el);
                }
            })
        })
        .catch(err => console.log(err));
    }, [isAuth])


    const login = (val)=>{
        setToken(val);
        setIsAuth(true);
        localStorage.setItem('logged-in user-id', val);
    }

    const logout = ()=>{
        setToken("");
        setIsAuth(false);
        localStorage.removeItem('logged-in user-id');
    }

    return <AuthContext.Provider value={{authState, user, login, logout}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;