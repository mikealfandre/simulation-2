import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { updateName } from '../../ducks/reducer'
import { updateAddress } from '../../ducks/reducer'
import { updateCity } from '../../ducks/reducer'
import { updateStateN } from '../../ducks/reducer'
import { updateZip } from '../../ducks/reducer'



class StepOne extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            address: '',
            city: '',
            stateN: '',
            zip: 0,
            

        }
        
    }
    componentDidMount(){
        const {name, address, city, stateN, zip} = this.props
        this.setState({
            name,
            address,
            city,
            stateN,
            zip

        })

    }

    handleChange(field, value) {
        this.setState({ [`${field}`]: value })
    }
    handleZipcode(value) {
        this.setState({ zip: value })
    }
    
    



    render() {
        console.log('Props', this.props)
        console.log('State', this.state)
        
        return (
            <div>
                Wizard Step1
                <div>
                    Name: <input value={this.state.name} onChange={(e) => this.handleChange("name", e.target.value)} type="text" />
                    Address: <input value={this.state.address} onChange={(e) => this.handleChange("address", e.target.value)} type="text" />
                    City: <input value={this.state.city} onChange={(e) => this.handleChange("city", e.target.value)} type="text" />
                    State: <input value={this.state.state} onChange={(e) => this.handleChange("state", e.target.value)} type="text" />
                    Zipcode: <input value={this.state.zip} onChange={(e) => this.handleZipcode(e.target.value)} />

                    
                </div>
                <nav>

                    
                    <div>
                        <Link to='/wizard/step2'><button onClick={(e) => { this.props.updateName(this.state.name); this.props.updateAddress(this.state.address); this.props.updateCity(this.state.city); this.props.updateStateN(this.state.stateN); this.props.updateZip(this.state.zip);}}>Next Step</button></Link>
                        

                    </div>
                </nav>


               
            </div>
        )
        
    }
}

function mapStateToProps(state) {
    const { name, address, city, stateN, zip } = state;

    return {
        name,
        address,
        city,
        stateN,
        zip
    };
}


export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateStateN, updateZip})(StepOne)