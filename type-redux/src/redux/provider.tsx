/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:43 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-23 14:33:02
 */


import {Container} from 'inversify'
import * as React from 'react'
import {useState} from 'react'
import context from './context'

const myContainer=new Container()
function Provider(props:any){
    const [state,setState]=useState()
    React.useMemo(()=>{
       props.store.subscribe(()=>{
            props.store.getState()
            setState({
                state:props.store.getState(),
                dispatch:props.store.dispatch,
                container:myContainer
            })
       })
    },[])


    return <context.Provider value={state}>
        {
            props.children
        }
    </context.Provider>
}
export default Provider