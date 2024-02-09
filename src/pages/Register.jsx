import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Register = () => {
    const { authInfo, updateAuthInfo, registerUser } = useContext(AuthContext)
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
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

                <button>Register</button>
            </form>
        </div>
    )
}

