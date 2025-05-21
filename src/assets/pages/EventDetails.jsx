import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetails = () => {
    const {id} = useParams()

    const [event, setEvent] = useState({})
  
      const getEvent = async () => {
        const res = await fetch(`https://ventixeeventservice-ctbhe9gzbuh3heb0.swedencentral-01.azurewebsites.net/api/Events/${id}`)
    
        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
      }

      useEffect(() => {
        getEvent()
      }, [])

  return (
    <main className="eventDetails">
      <div class="details-right">
        <div class="card">
          <div class="card-header">
          </div>
          <div class="card-main">
            <h4>{event.title}</h4>
            <p>{event.location}</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>{event.date}</p>
            </div>
            <p class="text-primary">${event.price}</p>
          </div>
        </div>  
        <div class="text">
            <h4>Terms and Conditions</h4>
            <p> - All attendees must possess a valid ticket for entry. </p>
            <p> - Attendees must present a valid government-issued ID along with their ticket at the gate.</p>
            <p> - Attendees are subject to security checks, including bag inspections, upon entry.</p>
          </div> 
      </div>

      <div class="details-left">
        <div class="packages">
          <h4>Packages</h4>
          <div class="package">
            <input type="checkbox" />
            <div class="space">
              <h4>General Package</h4>
              <p class="text-primary">${event.price}</p>
            </div>
          </div>
          <div class="package">
            <input type="checkbox" />
            <div class="space">
              <h4>Silver Package</h4>
              <p class="text-primary">${event.price} + $10</p>
            </div>
          </div>
          <div class="package">
            <input type="checkbox" />
            <div className="space">
              <h4>Gold Package</h4>
              <p class="text-primary">${event.price} + $20</p>
            </div>
          </div>
          <div class="package">
            <input type="checkbox" />
            <div className="space">
              <h4>Platinum Package</h4>
              <p class="text-primary">${event.price} + $40</p>
            </div>
          </div>
          <div class="package">
            <input type="checkbox" />
            <div className="space">
              <h4>Diamond Package</h4>
              <p class="text-primary">${event.price} + $60</p>
            </div>
          </div>
          <div class="package">
            <input type="checkbox" />
            <div className="space">
              <h4>VIP Package</h4>
              <p class="text-primary">${event.price} + $100</p>
            </div>
          </div>
          <Link class="book-btn" to={`/events/booking/${id}`}>Book</Link>
        </div>

      </div>
    </main>

    
  )
}

export default EventDetails