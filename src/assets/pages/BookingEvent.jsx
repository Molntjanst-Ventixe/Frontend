import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const BookingEvent = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({
        eventId: id, firstName: '', lastName: '', email: '', streetName: '', postalCode: '', city: '', ticketQuantity: 1
    })

        
        const getEvent = async () => {
            const res = await fetch(`https://ventixeeventservice-ctbhe9gzbuh3heb0.swedencentral-01.azurewebsites.net/api/Events/${id}`)
        
            try {
                if (!res.ok) {
                    throw new Error("Failed to fetch event")
                }

                const data = await res.json()
                setEvent(data.result)
            }
            catch (err)
            {
                console.error(err)
            }
        }
    
        const postBooking = async () => {

            try {
                const res = await fetch(`https://ventixebookingservice-d9ddhebbdah8atfj.swedencentral-01.azurewebsites.net/api/booking`, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if (!res.ok) {
                    console.error("Booking failed")
                }
                else {
                    console.log("Booking successful")
                    navigate('/')
                }
            }
            catch(err) {
                console.error("Error submiting booking", err)
            }
        }

        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData(prev => ({ ...prev, [name]: value}))
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            await postBooking()
        }

        useEffect(() => {
            getEvent()
        }, [])



  return (
    <main class="booking">
        <div class="section">
            <h1>Book Event</h1>
            <h2>{event.title}</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div class="input-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter your first name" />
                </div>
                <div class="input-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter your last name"  />
                </div>
                <div class="input-group">
                    <label htmlFor="">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
                </div>
                <div class="input-group">
                    <label htmlFor="">StreetName</label>
                    <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required placeholder="Enter your street name" />
                </div>
                <div class="input-group">
                    <label htmlFor="">Postal code</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required placeholder="Enter your postal code" />
                </div>
                <div class="input-group">
                    <label htmlFor="">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Enter your city" />
                </div>
                <button class="book-btn" type="submit">Book</button>
            </form>
        </div>
    </main>
  )
}

export default BookingEvent