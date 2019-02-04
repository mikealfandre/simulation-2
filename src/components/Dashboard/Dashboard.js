import React, {Component} from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom';
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }

        // this.getAllHouses = this.getAllHouses.bind(this)
    }
    
    
    
    // getAllHouses(){
    //     axios.get('/api/houses')
    //         .then((res) => {
    //             this.setState({houses: res.data})     
    //     })
    // }
    deleteHouse(id){
         axios.delete(`/api/house/${id}`)
            .then((res) => {
                console.log('res',res)
                console.log('res.data',res.data)
        })
                          
    }
    componentDidMount() {
        axios.get('/api/houses')
             .then((res) => {
                 this.setState({houses: res.data})  
                 console.log('Res Data', res.data)   
         })
         
    }
    
    render(){
    console.log('Dash STATE',this.state)

        const { houses } = this.state;
        const housesList = houses.map((house) => {
            return (

                <div>
                    <House key={house.house_id} name={house.name} address={house.address} stateN={house.staten} city={house.city} zip={house.zip} img={house.img} mortgage={house.mortgage} rent={house.rent} id={house.house_id} deleteHouseFN={this.deleteHouse} />
                </div>

            )
        })
    
    return(
            <div>
                
                Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link><br/>
                House Listings
                {housesList}
            </div>

        )
    }

    
}

export default Dashboard