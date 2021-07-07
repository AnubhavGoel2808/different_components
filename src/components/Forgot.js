import React from 'react'
import '../styles/forgot.css'
const Forgot = () => {
    return (
        <div className="container signin">
     <div className="row">
  <form className="col s12 formsignin">
    <h4>change password? / पासवर्ड बदलने का अनुरोध</h4>
    <div className="input-field ">
        <i className="material-icons prefix">password</i>
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">password/पासवर्ड</label>
      </div>
      <div className="input-field ">
        <i className="material-icons prefix">password</i>
        <input id="passwordagain" type="password" className="validate" />
        <label htmlFor="passwordagain">confirm password/पासवर्ड पुन: लिखिए</label>
      </div>
     
      <p></p>
      <button class="btn waves-effect waves-light " type="submit" name="action">Submit/दरज करे<i class="material-icons right">send</i>
  </button>
  </form>
</div>


        </div>
    )
}

export default Forgot
