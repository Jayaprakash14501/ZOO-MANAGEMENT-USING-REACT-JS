import React from "react";
import { Link } from "react-router-dom";
import './About.css'
import Cont from "./Cont";
export default function Contact(){
    var contacts=[{name:" Vandaloor Zoo",location:" Arignar Anna Zoological Park,Vandalur,Chennai, Tamil Nadu - 600048",phone:" 044 - 29542301", fax:" 044-22750741",email:" support@aazp.in", Timings:" 9.00 AM - 5.00 PM", holiday:"Tuesday",area:" 602 Hectares"}]
    return(<div>
        <div class="b">
            <h1>ZOO</h1>
            <ul>
          <li><Link to='/' class="a">Home</Link></li>
          <li><Link to='/animals' class="a">Animal</Link></li>
          <li>Contact and Location</li>
          <li><Link to='/about' class="a">About Us</Link></li>
        </ul>
        </div>
        <div class="p">
          <h3> <Cont contacts={contacts}/></h3>
        </div>
        <div>
        <img src="https://t4.ftcdn.net/jpg/02/20/68/57/240_F_220685772_7rQBSF8tsUna51Jbe0UvuHsZk3rtWP0T.jpg" alt="zoo" id="image1"/>
        </div>
      
        </div>
    )
}