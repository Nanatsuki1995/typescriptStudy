import * as React from 'react'
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'


import AuthorizeRoute from './authorizeRoute'
import Home from './home'
import Login from './login'

export default function Routes(){
    return <Router basename="/">
        <Switch>
            <Route path="/log" component={Login} />
            <AuthorizeRoute path="/home" component={Home} />
            <Redirect to="/log" />
        </Switch>
    </Router>
}