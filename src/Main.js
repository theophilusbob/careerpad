import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Mission from './Mission'
import Founder from './Founder'
import Process from './Process'

const Main = () => (
    
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/mission' component={Mission}/>
            <Route path='/founder' component={Founder}/>
            <Route path='/how-it-works' component={Process}/>
        </Switch>
   
)

export default Main