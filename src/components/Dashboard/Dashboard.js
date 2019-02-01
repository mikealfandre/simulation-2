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

        this.getAllHouses = this.getAllHouses.bind(this)
    }
    
    getAllHouses(){
        axios.get('/api/houses')
            .then((res) => {
                this.setState({houses: res.data})     
            })
    }
    deleteHouse(id){
        axios.delete(`/api/house/${id}`)
            .then((res) => {
                console.log(res)
            })

        
    }
    componentDidMount() {
        this.getAllHouses()
    }
    
    render(){
    console.log('massive get',this.state.houses)

        const { houses } = this.state;
        const housesList = houses.map((house, index) => {
            return (

                <div>
                    <House key={index} name={house.name} address={house.address} city={house.city} state={house.state} id={house.house_id} deleteHouseFN={this.deleteHouse} />
                </div>

            )
        })
    
    return(
            <div>
                {this.getAllHouses}
                Dashboard
                <Link to='/wizard'><button className='btn'>Add New Property</button></Link>
                {housesList}
            </div>

        )
    }

    
}

export default Dashboard