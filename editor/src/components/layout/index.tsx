import * as React from 'react'
import './assets/iconfont/iconfont.css'

interface IProps extends React.Props<any>{
    
}

export default function Layouts(props:IProps){
    return <div className='g-layouts'>
        {
            props.children
        }
    </div>
}