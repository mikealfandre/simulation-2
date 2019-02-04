import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import {updateMortgage} from '../../ducks/reducer'
import {updateRent} from '../../ducks/reducer'
import {clearState} from '../../ducks/reducer'


class StepThree extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            address:'',
            city:'',
            stateN:'',
            zip:'',
            img:'',
            mortgage: 0.00,
            rent: 0.00,
            
            redirect: false

        }

      this.createHouse = this.createHouse.bind(this)  
    }
    componentDidMount() {
        const { name, address, city, stateN, zip, img, mortgage, rent } = this.props
        this.setState({
            name,
            address,
            city,
            stateN,
            zip,
            img,
            mortgage,
            rent

        })
    }
    
    createHouse() {
        const { mortgage, rent} = this.state
        const { name, address, city, stateN, zip, img, clearState} = this.props

        axios.post('/api/createhouse', { name, address, city, stateN, zip, img, mortgage, rent })
            .then(() => {clearState(); this.setState({ redirect: true }) } )

        console.log('before clear state', this.props)
        clearState()    
        console.log('after clear state', this.props)


    }

    handleChange(field, value) {
        this.setState({ [`${field}`]: value })
    }


    render() {
        
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
                        <Link to='/wizard/step2'><button onClick={() => {this.props.updateMortgage(this.state.mortgage); this.props.updateRent(this.state.rent)}}>Previous Step</button></Link>
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

export default connect(mapStatetoProps, {updateMortgage, updateRent, clearState})(StepThree);






// const mapDispatchtoProps = {
//     updateEverything
// }

// export default connect (null, mapDispatchtoProps)(PageThree)