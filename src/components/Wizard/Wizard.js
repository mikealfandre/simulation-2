import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

class Wizard extends Component{
    constructor(){
        super()
    }
        

     
render(){
        
        return(
            <div>
                Add New Listing
                <Link to='/'><button>Cancel</button> </Link>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                    {/* <Route path='/classlist/:class' component={ClassList} /> */}

                </Switch>
                

                
                
            </div>
        )
    }
    
    
}   

export default Wizard