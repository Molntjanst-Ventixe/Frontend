import React from 'react'
import Facebook from '../images/FacebookLogo.svg'
import X from '../images/XLogo.svg'
import Instagram from '../images/InstagramLogo.svg'
import Youtube from '../images/YoutubeLogo.svg'
import Linkedin from '../images/LinkedinLogo.svg'

const Footer = () => {
  return (
    <footer>
      <div class="footer-text">
        <p>Copyright © 2025 Ventixe</p>
        <p class="text-grey">Privacy Policy</p>
        <p class="text-grey">Terms and Conditions</p>
        <p class="text-grey">Contact</p>
      </div>
      <div class="footer-social">
        <img src={Facebook} alt="Facebook" />
        <img src={X} alt="X" />
        <img src={Instagram} alt="Instagram" />
        <img src={Youtube} alt="Youtube" />
        <img src={Linkedin} alt="Linkedin" />
      </div>
    </footer>
  )
}

export default Footer