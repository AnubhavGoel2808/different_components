import React,{useEffect, useState} from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import para from '../images/parallex.jpg'

import M from "materialize-css/dist/js/materialize.min.js";
const MainPage = () => {
    const [open,setOpen]=useState(false);
    return (
        <div className="fluid-container">
             <Nav></Nav>
              <Sidebar></Sidebar>
              <div class="fixed-action-btn">
                    <a class="btn-floating btn-large red" onClick={()=>alert("click")}>
                        <i class="large material-icons">chat_bubble</i>
                    </a>
  
        </div>
        </div>
        
        
    )
}

export default MainPage
