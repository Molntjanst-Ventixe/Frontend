import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}`} class="card card-1">
          <div class="card-header">
          </div>
          <div class="card-main">
            <h4>{item.title}</h4>
            <p>{item.location}</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>{item.date}</p>
            </div>
            <p class="text-primary">${item.price}</p>
          </div>
        </Link>
  )
}

export default EventItem