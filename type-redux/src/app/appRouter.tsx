import * as React from 'react'
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import App from './container/app'
import Editor from './container/editor'

const AppRouter=()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/page1' exact={true} component={App} />
            <Route path='/page2' exact={true} component={App} />
            <Route path='/editor' exact={true} component={Editor} />
            <Redirect to='/' />
        </Switch>
    </BrowserRouter>
)

export default AppRouter