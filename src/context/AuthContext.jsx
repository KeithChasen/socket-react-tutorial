import { createContext, useState } from "react";
import { login, register } from "../api/v1";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [authInfo, setAuthInfo] = useState({
        email: '',
        password: ''
    });

    const updateAuthInfo = (info) => setAuthInfo(info);

    const registerUser = async e => {
        e.preventDefault();

        const data = await register(authInfo);

        console.log(data, 'register resp')

        if (data) {
            setUser(data);
            localStorage.setItem('User', JSON.stringify(data));
        }
    }

    const loginUser = async e => {
        e.preventDefault();

        const data = await login(authInfo);

        console.log(data, 'login resp')

        if (data) {
            setUser(data);
            localStorage.setItem('User', JSON.stringify(data));
        }
    }

    console.log(authInfo, 'authInfo')

    return <AuthContext.Provider value={{
        user,
        authInfo,
        updateAuthInfo,
        registerUser,
        loginUser
    }}>
        { children }
    </AuthContext.Provider>
}