import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const ui = localStorage.getItem('logged-in user-id');

    const [token, setToken] = useState(ui || "")
    const [isAuth, setIsAuth] = useState(ui ? true : false);
    const [updateCart, setUpdateCart] = useState(0);
    const [showAdminPage, setShowAdminPage] = useState(localStorage.getItem('show admin page') || false);

    const authState = { token, isAuth, updateCart, showAdminPage }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/cart?userId=${token}`)
            .then(res => {
                setUpdateCart(res.data.length)
            })
            .catch(err => console.log(err));
    }, [isAuth])


    const login = (val) => {
        setToken(val);
        setIsAuth(true);
        localStorage.setItem('logged-in user-id', val);
    }

    const logout = () => {
        setToken("");
        setIsAuth(false);
        setUpdateCart(0);
        localStorage.removeItem('logged-in user-id');
    }

    return <AuthContext.Provider value={{ authState, setUpdateCart, login, logout, setShowAdminPage }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;