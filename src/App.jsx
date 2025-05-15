import './App.css'
import { Routes, Route } from 'react-router-dom'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import Checkout from './assets/pages/Checkout'
import User from './assets/pages/User'

function App() {

  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path="/" element={<Events />} />
        <Route path="/Checkout" element={<Checkout />}/>
        <Route path="/User" element={<User />} />
      </Route>

      <Route element={<CenterLayout />}>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
      </Route>
    </Routes>
  )
}

export default App
