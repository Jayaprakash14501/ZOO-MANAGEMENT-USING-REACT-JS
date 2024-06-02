import React from "react";
import { Link } from "react-router-dom";
import './About.css'
import Anima from "./Anima";

export default function Ani(){
    var animals1=[{name:" tiger",species:" mammals",scientific:" panthera tigris",habitat:" savanha forest, rain forest, grassland",image:"https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_1280.jpg"},
    {name:" lion",species:" mammals",scientific:" panthera leo",habitat:" savanha forest, grassland, sahara",image:"https://cdn.pixabay.com/photo/2016/09/10/19/56/lions-1660044_1280.jpg"},
    {name:" leopard",species:" mammals",scientific:" panthera pardus",habitat:" tropical, sub-tropical, grassland, desert, mountains, savanha forest",image:"https://cdn.pixabay.com/photo/2021/12/28/16/35/leopard-6899752_1280.jpg"},
    {name:" elephant",species:" mammals",scientific:" elephas maximus",habitat:" savanha forest, deserts, tropical forest",image:"https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_1280.jpg"}];
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
            <li><Link to='/animals' class="a">Animals</Link></li>
                <li>Animals</li>
                <li><Link to='/animals/birds' class="a">Birds</Link></li>
                <li><Link to='/animals/reptiles' class="a">Reptiles</Link></li>
            </ul>
        </div></div>
        <div><Anima animals1={animals1}/></div>
            </div>
    )
}