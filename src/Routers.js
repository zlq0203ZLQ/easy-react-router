import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Detail from './components/detail'

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/detail' component={Detail}></Route>
        </Switch>
    </BrowserRouter>
)

export default BasicRoute