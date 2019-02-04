import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import {connect} from 'react-redux'
import {clearState} from '../../ducks/reducer'

class Wizard extends Component{
    
        
render(){
        
        return(
            <div>
                Add New Listing
                <Link to='/'><button onClick={() => this.props.clearState()}>Cancel</button> </Link>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </Switch>
            </div>
        )
    }
    
    
}   

export default connect(null, {clearState})(Wizard)
                    
