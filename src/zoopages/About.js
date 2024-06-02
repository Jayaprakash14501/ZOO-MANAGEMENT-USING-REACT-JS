import React from "react";
import './About.css'
import { Link } from "react-router-dom";
export default function About(){
    return(
        <div id="a">
        <div class="b">
            <h1>ZOO</h1>
              <ul>
          <li><Link to='/' class="a">Home</Link></li>
          <li><Link to='/animals' class="a">Animal</Link></li>
          <li><Link to='/contacts' class="a">Contact and Location</Link></li>
          <li>About Us</li>
        </ul>
        </div>
        <div class="p">
            <h3>About Zoo</h3><hr></hr>
            <p>Vandaloor zoo is one of the modern and scientific management zoo and managed with 259 staff and contract workers. Vandaloor zoo is the pride of tamilnadu. The functions carried out in the zoo includes animal welfare, commissary, transport, research, education and awareness, veterinary, horticulture, security and sanitary and zoo administration.</p>
        </div>
        
        <div class="w">
            <h3>VISION OF THE ZOO</h3><hr></hr>
            <p>The Vision of AAZP is to have environmentally sensitive people who care for the wild fauna and flora and conserve it for long term welfare of mankind.</p>
        </div>
        <div class="y">
        
            <h3>MISSIONS OF ZOO</h3><hr></hr>
            <ol>
                <li>Conservation of the fauna of eastern and western ghats with special reference to LTM, Nilgiri Langur, Gaur and small mammals.</li>
                <li>To provide to all the animals housed in the Zoo highest standards of housing, upkeep and health care.</li>
                <li>To provide the zoo visitors oppurtunities for getting an uninterrupted view of wild animals to develop an empathy towards them</li>
                <li>To carryout research on different aspects of biology, behaviour and genetic makeup of endangered species of wild animals </li>
            </ol>
        </div>
        <div class="v">
            <h1>OBJECTIVES</h1><hr></hr>
            <ol>
                <li>Ex-situ conservation and propagation of a fauna of western and eastern ghats.</li>
                <li>Initiate captive breeding programmee for endangered species in accordance with the protocol for rehabilitation of the species in the wild if necessary.</li>
                <li>Promote Zoo as center of conservation awareness by organizing wild life education and interpretation programme to elicit broad based public support from different section of society.</li>
                <li>Provide oppurtunities to conduct scientific studies on the fauna to enhance our knowledge on animal behaviour.</li>
                <li>to provide facility for health care and rehabilitation rescued animals.</li>
            </ol>
        </div>
       
        <img src="https://t4.ftcdn.net/jpg/02/20/68/57/240_F_220685772_7rQBSF8tsUna51Jbe0UvuHsZk3rtWP0T.jpg" alt="zoo" id="image1"/>
        
        </div>
    )       
}