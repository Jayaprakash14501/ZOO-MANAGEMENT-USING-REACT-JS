import React from "react";
import { Link } from "react-router-dom";

import './About.css'
import Anima from "./Anima";

export default function Rep(){
    var animals1=[{name:" king cobra",species:" snake",scientific:" Ophiophagus hannah",habitat:" dense forest, agricultural land, mangrove forest",image:"https://media.istockphoto.com/id/538052908/photo/king-cobra.webp?b=1&s=612x612&w=0&k=20&c=tCcbImfl3R4T75CidtoAeRYZM6XxvahjDoW08ZZ_fCk="},
    {name:" crocodile",species:" reptiles",scientific:" Crocodylus johnsoni",habitat:" rivers, lakes, wetland, saltwater",image:"https://cdn.pixabay.com/photo/2017/05/07/19/00/crocodile-2293232_1280.jpg"},
    {name:" turtle",species:" reptiles",scientific:" Testudines",habitat:" ocean, apart from cold polar seas",image:" https://cdn.pixabay.com/photo/2016/11/29/07/15/animal-1868046_1280.jpg"},
    {name:" Komodo dragon",species:" reptiles",scientific:" Varanus komodoensis",habitat:" indonesian islands, flores, padar",image:"https://media.istockphoto.com/id/1064310768/pl/zdj%C4%99cie/portret-smoka-komodo.webp?b=1&s=612x612&w=0&k=20&c=j8pD3c6qKv1YDIxfiXl2QE_SRjRPDNTa_OHN_jrLoFY="}];
    return(<div >
         <div class="b">
            <h1>ZOO</h1>
            <ul>
          <li><Link to='/' class="a">Home</Link></li>
          <li>Animal</li>
          <li><Link to='/contacts' class="a">Contact and Location</Link></li>
          <li><Link to='/about' class="a">About Us</Link></li>
        </ul>
        <div><hr></hr>
            <ul><li><Link to='/animals'class="a">Animals</Link></li>
                
                <li><Link to='/animals/animal'class="a">Animals</Link></li>
                <li><Link to='/animals/birds'class="a">Birds</Link></li>
                <li>Reptiles</li>
            </ul>
        </div></div>
        
        </div>
             
    )
}