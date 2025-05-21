import React from 'react'
import Logo from '../images/Logo.svg'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo"/>
        <div class="nav-btns">
          <NavLink to="/" class="nav-btn" end>
            <i class="fa-solid fa-ticket"></i>
            <p>Events</p>
          </NavLink>
          {/* <NavLink to="/Checkout" class="nav-btn">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Checkout</p>
          </NavLink> */}
          {/* <NavLink to="/User" class="nav-btn">
            <i class="fa-solid fa-user"></i>
            <p>User</p>
          </NavLink> */}
        </div>
    </nav>
  )
}

export default Nav