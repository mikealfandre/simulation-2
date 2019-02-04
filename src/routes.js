import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import StepOne from './components/Wizard/StepOne'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/wizard/step1' component={StepOne}/>
    </Switch>
) 
        