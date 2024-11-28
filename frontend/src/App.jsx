import { BrowserRouter, Routes,Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
