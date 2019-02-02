import React, { Component } from 'react'

function House(props){
    
    return(
        <div>
           
                <h3></h3>
                <h4>{props.name}</h4>
                <h4>{props.address}</h4>
                <h4>{props.city}</h4>
                <h4>{props.stateN}</h4>
                <h4>{props.zip}</h4>
                <h4>{props.img}</h4>
                <h4>{props.mortgage}</h4>
                <h4>{props.rent}</h4>


                <button onClick={() => props.deleteHouseFN(props.id)}>Delete</button>


            
        </div>
    )
}

export default House