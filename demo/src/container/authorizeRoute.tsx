
import * as React from 'react'
import {connect} from 'react-redux'
import {Redirect,Route,withRouter} from 'react-router-dom'

function AuthourizeRoute(props:any){
    const {initialReducer,path}=props
    return initialReducer.paths.indexOf(path)!==-1
    ?
    <Route path={props.path} component={props.component}/>
    :
    <Redirect to="/log" />

}

export default connect(state=>state)(withRouter(AuthourizeRoute))