import React from 'react'

const Checkout = () => {
  return (
    <div class="checkout">

    <div class="checkout-left">
      <div class="card">
        <div class="card card-1" >
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
        </div>
      </div>

      <div class="payment">
        <h3>Payment</h3>
        <div class="checkbox-input">
          <input id="checkbox" type="checkbox" />
          <label htmlFor="">Pay with credit card</label>
        </div>
        <div class="checkbox-input">
          <input type="checkbox" />
          <label htmlFor="">Pay with debit card</label>
        </div>
        <div class="checkbox-input">
          <input type="checkbox" />
          <label htmlFor="">Pay later with invoice</label>
        </div>
      </div>    
    </div>

    <div class="checkout-right">
      <div class="personal-information">
        <h1>Personal Information</h1>
        <form action="">
          <div class="input-group">
            <label htmlFor="" class="form-label">Email adress</label>
            <input type="text" class="form-input" placeholder="Enter your email" />
            <span></span>
          </div>
          <div class="input-group">
            <label htmlFor="" class="form-label">First Name</label>
            <input type="text" class="form-input" placeholder="Enter your first name" />
            <span></span>
          </div>
          <div class="input-group">
            <label htmlFor="" class="form-label">Last Name</label>
            <input type="text" class="form-input" placeholder="Enter your last name" />
            <span></span>
          </div>
          <div class="input-group">
            <label htmlFor="" class="form-label">Phonenumber</label>
            <input type="text" class="form-input" placeholder="Enter your phonenumber" />
            <span></span>
          </div>
            <div class="input-group">
              <label htmlFor="" class="form-label">Postal Code</label>
              <input type="text" class="form-input" placeholder="Enter your postal code" />
              <span></span>
            </div>
            <button>
              <i class="fa-solid fa-credit-card"></i>
              <p>Place order</p>
            </button>
        </form>
      </div>
    </div>
      
    </div>
  )
}

export default Checkout