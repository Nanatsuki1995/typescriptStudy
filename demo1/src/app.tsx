// 1 引入rect   @types
import * as React from 'react'
import {useState} from 'react'


interface IProps{
    status:boolean
}

function App(props:IProps){
    const [count,setCount]=useState(0)
    const [a,seta]=useState('aaa')
    
    return <>
    
        <div onClick={()=>{setCount(count+1)}}>{count}</div>
        <div onClick={()=>{seta(a+'1111')}}>{a}</div>
    </>
}

export default App


// recat-hooks



