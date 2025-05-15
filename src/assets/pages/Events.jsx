import React from 'react'
import { NavLink } from 'react-router-dom'


const Events = () => {
  return (
    <main class="events">
      <div class="cards">


        <NavLink to="/Checkout" class="card card-1">
          <div class="card-header">
            <p>Sport</p>
          </div>
          <div class="card-main">
            <h4>Champions Leauge Screening Night</h4>
            <p>SkyDome Stadium, Toronto, ON</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>Apr 20, 2029</p>
            </div>
            <p class="text-primary">$30</p>
          </div>
        </NavLink>
        {/* <div class="card card-1" >
          
        </div> */}

          <NavLink to ="/Checkout" class="card card-2" id="card-2">
            <div class="card-header">
              <p>Food & Culinary</p>
            </div>
            <div class="card-main">
              <h4>Culinary Delights Festival</h4>
              <p>Gourmet Main Plaza, San Francisco, CA</p>
            </div>
            <div class="card-footer">
              <div class="date">
                <i class="fa-solid fa-calendar-days"></i>
                <p>Mar 3, 2029</p>
              </div>
              <p class="text-primary">$40</p>
            </div>
          </NavLink>

{/* 
        <div class="card card-2">
          
        </div> */}

        <NavLink to="/Checkout" class="card card-3" id="card-3">
          <div class="card-header">
            <p>Fashion</p>
          </div>
          <div class="card-main">
            <h4>Artistry Unveiled: Modern Art Expo</h4>
            <p>Vogue Hall, Los Angeles, CA</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>Mar 10, 2029</p>
            </div>
            <p class="text-primary">$110</p>
          </div>
        </NavLink>
{/* 
        <div class="card card-3">
          
        </div> */}

        <NavLink to="/Checkout" class="card card-4" id="card-4">
          <div class="card-header">
            <p>Music</p>
          </div>
          <div class="card-main">
            <h4>Rhythm & Beats Electronica Festival</h4>
            <p>Sunset Park, Los Angeles, CA</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>Apr 10, 2029</p>
            </div>
            <p class="text-primary">$160</p>
          </div>
        </NavLink>

{/* 
        <div class="card card-4">
          
        </div> */}

        <NavLink to="/Checkout" class="card card-5" id="card-5">
          <div class="card-header">
            <p>Outdoor & Adventure</p>
          </div>
          <div class="card-main">
            <h4>Adventure Gear Show</h4>
            <p>Rocky Ridge Exhibition Hall, Denver, CO</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>June 5, 2029</p>
            </div>
            <p class="text-primary">$40</p>
          </div>
        </NavLink>
{/* 
        <div class="card card-5">
          
        </div> */}

        <NavLink to="/Checkout" class="card card-6" id="card-6">
          <div class="card-header">
            <p>Music</p>
          </div>
          <div class="card-main">
            <h4>Symphony Under the Stars: The Experience</h4>
            <p>Sunset Park, Los Angeles, CA</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>Apr 20, 2029</p>
            </div>
            <p class="text-primary">$50</p>
          </div>
        </NavLink>

        {/* <div class="card card-6">
        </div> */}

        <NavLink to="/Checkout" class="card card-7" id="card-7">
          <div class="card-header">
            <p>Fashion</p>
          </div>
          <div class="card-main">
            <h4>Runway Revolution 2029: A New Frontier</h4>
            <p>Vogue Hall, New York, NY</p>
          </div>
          <div class="card-footer">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              <p>May 1, 2029</p>
            </div>
            <p class="text-primary">$100</p>
          </div>
        </NavLink>

        {/* <div class="card card-7">
        </div> */}

          <NavLink to="/Checkout" class="card card-8" id="card-8">
            <div class="card-header">
              <p>Music</p>
            </div>
            <div class="card-main">
              <h4>Echo Beats Festival</h4>
              <p>Fifteenth Waterfall Plaza, Los Angeles, CA</p>
            </div>
            <div class="card-footer">
              <div class="date">
                <i class="fa-solid fa-calendar-days"></i>
                <p>May 20, 2029</p>
              </div>
              <p class="text-primary">$60</p>
            </div>
          </NavLink>
{/* 
        <div class="card card-8">
        </div> */}

      </div>
    </main>
  )
}

export default Events