import './App.css'
import { Routes, Route } from 'react-router-dom'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'
import BookingEvent from './assets/pages/BookingEvent'

function App() {

  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path="/" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />}/>
        <Route path="/events/booking/:id" element={<BookingEvent />}/>
      </Route>
    </Routes>
  )
}

export default App
