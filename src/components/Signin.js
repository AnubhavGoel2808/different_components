import React from 'react'
import '../styles/signin.css'
const Signin = () => {
    return (
        <div className="container signin">
     <div className="row">
  <form className="col s12 formsignin">
    <h4>Login / लॉग इन करें</h4>
      <div className="input-field ">
        <i className="material-icons prefix">account_circle</i>
        <input id="icon_prefix" type="text" className="validate" />
        <label htmlFor="icon_prefix">Email</label>
      </div>
      <div className="input-field ">
        <i className="material-icons prefix">password</i>
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">password/पासवर्ड</label>
      </div>
      <a  >forgot password? / पासवर्ड बदलने का अनुरोध </a>
      <p></p>
      <button class="btn waves-effect waves-light " type="submit" name="action">Submit/दरज करे<i class="material-icons right">send</i>
  </button>
  </form>
</div>


        </div>
    )
}

export default Signin
