import React from "react";
import {  Link } from "react-router-dom";
import './About.css'


export default function Animal(){
    return(<div>
        <div class="b">
            <h1>ZOO</h1>
            <ul>
          <li><Link to='/' class="a">Home</Link></li>
          <li>Animal</li>
          <li><Link to='/contacts' class="a">Contact and Location</Link></li>
          <li><Link to='/about' class="a">About Us</Link></li>
        </ul>
        <div><hr></hr>
            <ul>
                <li><Link to='/animals/animal' class="a">Animals</Link></li>
                <li><Link to='/animals/birds' class="a">Birds</Link></li>
                <li><Link to='/animals/reptiles' class="a">Reptiles</Link></li>
            </ul>
        </div>
        <img src="https://media.istockphoto.com/id/1321956565/photo/breathtaking-view-of-maldives-tropical-beach-during-sunrise.jpg?s=612x612&w=0&k=20&c=wq05x00LgrthQJiyJNzOYNmCclVra1RcawpOOvpBbSk=" alt="seashore" class="m"/>
        </div>
        <img src="https://t4.ftcdn.net/jpg/02/20/68/57/240_F_220685772_7rQBSF8tsUna51Jbe0UvuHsZk3rtWP0T.jpg" alt="zoo" id="image1"/>
        </div>
    )
}