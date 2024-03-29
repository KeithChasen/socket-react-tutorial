import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    return (
        <nav>
            <ul>
                { user && <Link to='/'>Chat</Link> }
                {user ? 
                <div>
                    <span>{user.email}</span>
                    <button onClick={logoutUser}>Logout</button> 
                </div>
                : (
                    <div>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}