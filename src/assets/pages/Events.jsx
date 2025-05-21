import React from 'react'
import { NavLink } from 'react-router-dom'
import EventList from '../components/EventList'


const Events = () => {
  return (
    <main class="events">
      <div class="cards">

        <EventList />

      </div>
    </main>
  )
}

export default Events