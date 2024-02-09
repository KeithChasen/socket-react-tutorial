import { createContext, useEffect, useState } from "react";
import { login, register } from "../api/v1";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [authInfo, setAuthInfo] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const user = localStorage.getItem('User')

        setUser(JSON.parse(user));
    }, [])

    const logoutUser = () => {
        localStorage.removeItem('User');
        setUser(null);
    };

    const updateAuthInfo = (info) => setAuthInfo(info);

    const registerUser = async e => {
        e.preventDefault();

        const data = await register(authInfo);

        if (data) {
            setUser(data);
            localStorage.setItem('User', JSON.stringify(data));
        }
    }

    const loginUser = async e => {
        e.preventDefault();

        const data = await login(authInfo);

        if (data) {
            setUser(data);
            localStorage.setItem('User', JSON.stringify(data));
        }
    }

    return <AuthContext.Provider value={{
        user,
        authInfo,
        updateAuthInfo,
        registerUser,
        loginUser,
        logoutUser
    }}>
        { children }
    </AuthContext.Provider>
}