import React from 'react'
import Logo from '../images/Logo.svg'

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo"/>
        <div class="nav-btns">
          <button class="nav-btn">
          <i class="fa-solid fa-ticket"></i>
          <p>Events</p>
          {/* <Link to="/">Events</Link> */}
        </button>
        <button class="nav-btn">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Checkout</p>
        </button>
        <button class="nav-btn">
          <i class="fa-solid fa-user"></i>
          <p>User</p>
        </button>
        </div>
    </nav>
  )
}

export default Nav