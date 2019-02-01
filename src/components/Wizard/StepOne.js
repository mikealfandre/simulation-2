import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router'

class StepOne extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            redirect: false

        }
        this.createHouse = this.createHouse.bind(this)
    }

    handleChange(field, value) {
        this.setState({ [`${field}`]: value })
    }
    handleZipcode(value) {
        this.setState({ zipcode: +value })
    }
    createHouse() {
        const { name, address, city, state, zipcode } = this.state

        axios.post('/api/createhouse', { name, address, city, state, zipcode })
            .then(() => this.setState({ redirect: true }))


    }



    render() {
        console.log('current state', this.state)
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                Wizard
                <div>
                    Name: <input value={this.state.name} onChange={(e) => this.handleChange("name", e.target.value)} type="text" />
                    Address: <input value={this.state.address} onChange={(e) => this.handleChange("address", e.target.value)} type="text" />
                    City: <input value={this.state.city} onChange={(e) => this.handleChange("city", e.target.value)} type="text" />
                    State: <input value={this.state.state} onChange={(e) => this.handleChange("state", e.target.value)} type="text" />
                    Zipcode: <input value={this.state.zipcode} onChange={(e) => this.handleZipcode(e.target.value)} />

                    <button onClick={this.createHouse}>Complete</button>
                </div>


               
            </div>
        )
    }
}

export default StepOne