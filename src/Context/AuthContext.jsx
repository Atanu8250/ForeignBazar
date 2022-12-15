import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthContextProvider = ({children})=>{

    const ui = localStorage.getItem('logged-in user-id');

    const [token, setToken] = useState(ui || "")
    const [isAuth, setIsAuth] = useState(ui ? true : false);

    const authState = {token, isAuth}

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

    return <AuthContext.Provider value={{authState, login, logout}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;