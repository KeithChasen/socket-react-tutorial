import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Chat } from './pages/Chat'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Chat/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App