import React from "react";
import './About.css'
import { Link } from "react-router-dom";
export default function Home(){
    return(<div id="a">
        <div class="b">
            <h1>ZOO</h1>
            <ul>
          <li>Home</li>
          <li><Link to='/animals' class="a">Animal</Link></li>
          <li><Link to='/contacts' class="a">Contact and Location</Link></li>
          <li><Link to='/about' class="a">About Us</Link></li>
        </ul>
        </div>
        <img src="https://t4.ftcdn.net/jpg/02/20/68/57/240_F_220685772_7rQBSF8tsUna51Jbe0UvuHsZk3rtWP0T.jpg" alt="zoo" id="image1"/>
        <img src="https://t4.ftcdn.net/jpg/04/15/79/09/240_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg" alt="animals" id="image2"/>
        <img src="https://t3.ftcdn.net/jpg/01/34/43/86/240_F_134438640_U1URBNcPW4WV6KH4gp8Rr5DJUTYVtD3E.jpg" alt="animals" id="image3"/>
        
            <div class="fl1">
               <img src="https://cdn.pixabay.com/photo/2016/11/29/10/07/tiger-1868911_1280.jpg" alt="tiger"/>
            </div>
            <div class="fl2">
            <h1>Welcome To Zoo</h1>
            <p >Vandaloor Zoological Park was the first zoo established the country in 1855. It is one of the largest Zoos in Southeast Asia, spreading across 602 hectares of land. It is one of the most modern and scientifically managed Zoos in the country and it is rated as the "Best Zoo" in the country with a top score of 82% in the first Management Effectiveness Evaluation conducted by the central Zoo authority, MOEF & CC. The park works with the mission of conservation breeding of rare and endangered animals, veterinary care & conservation education.</p>
            </div>
        
        <div class="day">
            <div class="fun">
                <p>22<sup>nd</sup> APRIL</p>
                <h3>World Earth Day</h3>

            </div>
            <div class="fun">
            <p>08<sup>th</sup> APRIL</p>
                <h3>National Zoo Lover's Day</h3>
</div>
<div class="fun">
<p>16<sup>th</sup> APRIL</p>
                <h3>Save The Elephant Day</h3>
</div>
<div class="fun">
<p>03<sup>th</sup> APRIL</p>
                <h3>World Aquatic Animal Day</h3>
</div>
        </div></div>
        
    )
}