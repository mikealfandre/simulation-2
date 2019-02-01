import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

class StepThree extends Component {
    constructor() {
        super()
        this.state = {
            mortgage: 0,
            rent: 0,
            redirect: false

        }
        
    }
    
    createHouse() {
        const { name, address, city, state, zipcode } = this.state

        axios.post('/api/createhouse', { name, address, city, state, zipcode })
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
                        <Link to='/wizard/step2'>Previous Step</Link>
                        <button onClick={this.createHouse}>Complete</button>
                    </div>
                </nav>



            </div>
        )
    }
}


function mapStatetoProps(state) {
    const { name, address, city, stateN, zip, img, mortgage, rent  } = state
    return {
        name,
        address,
        city,
        stateN,
        zip,
        img,
        mortgage,
        rent
    }
}

export default connect(mapStatetoProps)(StepThree);






// const mapDispatchtoProps = {
//     updateEverything
// }

// export default connect (null, mapDispatchtoProps)(PageThree)