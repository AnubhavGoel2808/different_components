import React from 'react'
import '../styles/login.css'
const Login = () => {
    return (
        <div className="container">
       <div className="row">
           <h5 className="">SignUp/खाता बनाया</h5>
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input  id="first_name" type="text" className="validate" required/>
        <label htmlFor="first_name">First Name/मूल नाम</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" required/>
        <label htmlFor="last_name">Last Name/सरनेम</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="phone" type="text" pattern="\d*" maxlength="4" className="validate" required/>
        <label htmlFor="phone">phone no./मोबाइल न.</label>
        <span className="helper-text" data-error="wrong" data-success="right">10-digit phone number </span>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" minLength="8" className="validate" required />
        <label htmlFor="password">Password/पासवर्ड</label>
        <span className="helper-text" data-error="wrong" data-success="right">8 characters</span>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate" required/>
        <label htmlFor="email">Email</label>
        <span className="helper-text" data-error="wrong" data-success="right">abc@example.com</span>
      </div>
    </div>
    {/* <div className="row">
      <div className="col s12">
        This is an inline input field:
        <div className="input-field inline">
          <input id="email_inline" type="email" className="validate" />
          <label htmlFor="email_inline">Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
    </div> */}
     <button class="btn waves-effect waves-light" type="submit" name="action">Submit/दरज करे<i class="material-icons right">send</i>
  </button>
  </form>
</div>

        </div>
    )
}

export default Login
