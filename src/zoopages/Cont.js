import React from "react";
export default function Cont(props){
    var contacts=props.contacts;
    return(
        <div>
            <ul>
                {
                  contacts.map((contact,index)=>{
                    return <li key={index}><h3><b>NAME:</b>{contact.name}</h3>
                    <h3>LOCATION:{contact.location}</h3>
                    <h3><b>PHONE NO:</b>{contact.phone}</h3>
                    <h3><b>FAX NO:</b>{contact.fax}</h3>
                    <h3><b>E-MAIL:</b>{contact.email}</h3>
                    <h3><b>TIMING:</b>{contact.Timings}</h3>
                    <h3><b>HOLIDAY:</b>{contact.holiday}</h3>
                    <h3><b>AREA:</b>{contact.area}</h3></li>
                  })
                }
            </ul>
        </div>
    )
}