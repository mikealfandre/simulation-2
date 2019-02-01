import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { updateMortgage } from '../../ducks/reducer'
import { updateRent } from '../../ducks/reducer'

class StepThree extends Component {
    constructor(props) {
        super(props)
        const {name} = props;
        this.state = {
            name,
            address: props.address,
            city: props.city,
            stateN: props.stateN,
            zip: props.zip,
            mortgage: 0,
            rent: 0,
            
            redirect: false

        }

      this.createHouse = this.createHouse.bind(this)  
    }
    
    createHouse() {
        const { mortgage, rent} = this.state
        const { name, address, city, stateN, zip, img} = this.props

        axios.post('/api/createhouse', { name, address, city, stateN, zip, img, mortgage, rent })
            .then(() => this.setState({ redirect: true }))


    }

    handleChange(field, value) {
        this.setState({ [`${field}`]: value })
    }






    render() {
        console.log('current state', this.state)
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to='/' />

        
        }
        return (
            <div>
                Wizard Step 3 
                <div>
                    Monthly Mortgage Amount: <input value={this.state.mortgage} onChange={(e) => this.handleChange("mortgage", e.target.value)} type="text" />
                    Desired Monthly Rent: <input value={this.state.rent} onChange={(e) => this.handleChange("rent", e.target.value)} type="text" />


                    
                </div>
                <nav>
                    <div>
                        <Link to='/wizard/step2'><button onClick={(e) => { this.props.updateMortgage(e.target.value); this.props.updateRent(e.target.value);}}>Previous Step</button></Link>
                        <button onClick={this.createHouse}>Complete</button>
                    </div>
                </nav>



            </div>
        )
    }
}


function mapStatetoProps(state) {
    const { name, address, city, stateN, zip, img  } = state
    return {
        name,
        address,
        city,
        stateN,
        zip,
        img,
        
    }
}

export default connect(mapStatetoProps, {updateMortgage, updateRent})(StepThree);






// const mapDispatchtoProps = {
//     updateEverything
// }

// export default connect (null, mapDispatchtoProps)(PageThree)