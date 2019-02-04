import React from 'react'

function House(props){
    console.log("props StateN", props.stateN)
    console.log("props City", props.city)
    
    return(
        <div>
           
                
                <h4>{props.name}</h4>
                <h4>{props.address}</h4>
                <h4>{props.city}</h4>
                <h4>{props.stateN}</h4>
                <h4>{props.zip}</h4>
                <img src={props.img} alt=""/>
                <h4>{props.mortgage}</h4>
                <h4>{props.rent}</h4>


                <button onClick={() => props.deleteHouseFN(props.id)}>Delete</button> 


            
        </div>
    )
}

export default House