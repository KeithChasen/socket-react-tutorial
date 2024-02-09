import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Chat</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </ul>
        </nav>
    )
}