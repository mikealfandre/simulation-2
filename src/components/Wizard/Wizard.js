import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Wizard extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode: null
        }
    }

    handleChange(field, value) {
        this.setState({ [`${field}`]: value })
    }
    handleZipcode(value) {
        this.setState({ zipcode: +value })
    }



    render(){
        return(
            <div>
                Wizard
                <div>
                    Name: <input value={this.state.name} onChange={(e) => this.handleChange("name", e.target.value)} type="text" />
                    Address: <input value={this.state.address} onChange={(e) => this.handleChange("address", e.target.value)} type="text" />
                    City: <input value={this.state.city} onChange={(e) => this.handleChange("city", e.target.value)} type="text" />
                    State: <input value={this.state.state} onChange={(e) => this.handleChange("state", e.target.value)} type="text" />
                    Zipcode: <input value={this.state.zipcode} onChange={(e) => this.handleZipcode(e.target.value)} />
                    <button>Submit</button>
                </div>
                
                <Link to='/'><button className='btn'>Cancel</button> </Link>
            </div>
        )
    }
}

export default Wizard