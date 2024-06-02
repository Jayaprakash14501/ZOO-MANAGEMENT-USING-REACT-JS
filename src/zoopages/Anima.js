import React from 'react';
export default function Anima(props){
    const animals1=props.animals1;
    return(
        <div>
        <ul>
        {
            animals1.map((animal,index)=>{
                return <li key={index}><div class="maindiv">
                    <img src={animal.image } alt="animals" class="imagediv"/>
                    <div class="secdiv">
                    <div class="findiv"><ul><li>Name:{animal.name}</li><br></br>
                    <li>Scientic name:{animal.scientific}</li><br></br>
                    <li>Species:{animal.species}</li><br></br>
                    <li>Habitat:{animal.habitat}</li></ul></div>
                    </div>
                    </div></li>
            })
        }
            </ul>
        </div>
    )
}