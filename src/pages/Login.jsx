import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {
    const { authInfo, updateAuthInfo, loginUser } = useContext(AuthContext)

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
            <label>Email</label>
                <input type="email" onChange={e => updateAuthInfo({
                    ...authInfo,
                    email: e.target.value
                })} />

                <label>Password</label>
                <input type="password" onChange={e => updateAuthInfo({
                    ...authInfo,
                    password: e.target.value
                })}/>

                <button>Login</button>
            </form>
        </div>
    )
}

