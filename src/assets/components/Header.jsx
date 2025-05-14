import React from 'react'
import Settings from '../images/Settings.svg'

const Header = () => {
  return (
    <header>
      <div class="header-text">
        <h2>Home</h2>
        <p>Welcome to Ventixe!</p>
      </div>
      <div class="header-settings">
        <img src={Settings} alt="Settings" />
      </div>
    </header>
  )
}

export default Header