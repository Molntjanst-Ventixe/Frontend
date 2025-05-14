import './App.css'
import { Routes, Route } from 'react-router-dom'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import Checkout from './assets/pages/Checkout'

function App() {

  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path="/" element={<Events />} />
      </Route>

      <Route element={<CenterLayout />}>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
      </Route>
    </Routes>
  )
}

export default App
