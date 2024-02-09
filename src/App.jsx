import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { AuthContext } from './context/AuthContext'
import { Chat } from './pages/Chat'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
function App() {

  const { user } = useContext(AuthContext)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Chat/> : <Navigate to="/login" />} />
        <Route path='/login' element={user ? <Navigate to="/login" /> : <Login/>} />
        <Route path='/register' element={user ? <Navigate to="/login" /> : <Register/>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App