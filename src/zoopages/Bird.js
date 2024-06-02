import React from "react";
import { Link } from "react-router-dom";

import './About.css'
import Anima from "./Anima";

export default function Bird(){
    var animals1=[{name:" Peacock",species:" birds",scientific:" Pavo cristatus",habitat:" farms, agricultural field, open low field forest", image:"https://cdn.pixabay.com/photo/2015/06/21/20/12/peafowl-816981_1280.jpg"},
    {name:" pigeon",species:" birds",scientific:" Columbidae",habitat:" pigeons are found everywhere except dry lands like artic and antartica",image:"https://cdn.pixabay.com/photo/2023/04/13/06/33/birds-7921816_1280.jpg"},
    {name:" eagle",species:" birds",scientific:" Aquila chrysaetos",habitat:" coastlines, reservoirs, and rivers.",image:"https://cdn.pixabay.com/photo/2016/10/19/13/42/eagle-1753002_1280.jpg"},
    {name:" parrot",species:" birds",scientific:" Psittaciformes",habitat:" Australia and Oceania, South Asia, Southeast Asia, Central America, South America and Africa",image:"https://cdn.pixabay.com/photo/2023/02/15/13/19/bird-7791901_1280.jpg" }];
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
            <li><Link to='/animals'class="a">Animals</Link></li>
                
                <li><Link to='/animals/animal'class="a">Animals</Link></li>
                <li>Birds</li>
                <li><Link to='/animals/reptiles'class="a">Reptiles</Link></li>
            </ul>
            </div></div>
            <div><Anima animals1={animals1}/></div>
        </div>
    )
}