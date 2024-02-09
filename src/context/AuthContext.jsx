import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [authInfo, setAuthInfo] = useState({
        email: '',
        password: ''
    });

    const updateAuthInfo = (info) => setAuthInfo(info);

    console.log(authInfo, 'authInfo')

    return <AuthContext.Provider value={{
        user,
        authInfo,
        updateAuthInfo
    }}>
        { children }
    </AuthContext.Provider>
}