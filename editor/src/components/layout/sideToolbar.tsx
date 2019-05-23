import * as React from 'react'
import './sideToolbar.scss'

export default class SideToolbar extends React.Component{

    public render(){
        return <div className='g-side-toolbar'>
            <div className='u-item'><i className='iconfont icon-yangshi' /></div>
            <div className='u-item'><i className='iconfont icon-shuxing' /></div>
            <div className='u-item'><i className='iconfont icon-tuceng' /></div>
            <div className='u-item z-cur'><i className='iconfont icon-Basic_Data' /></div>
            <div className='u-item'><i className='iconfont icon-incident' /></div>
        </div>
    }
    
}