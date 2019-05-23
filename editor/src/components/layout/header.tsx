import * as React from 'react'
import './header.scss'

export default function Header(){
    return <div className='g-header'>
        <div className='m-logo'><i className='iconfont icon-icon-test' /> 易视可视化</div>

        <div className='m-toolbar'> 
            <input placeholder='输入项目编号' type='text' className='u-ipt u-search'/>
            <button className='u-btn u-save'><i className='iconfont icon-tishi'> 保存</i></button>
            <button className='u-btn u-download'>下载</button>
            <span className='u-btn'><i className='iconfont icon-undo'> 重做</i></span>
            <span className='u-btn'><i className='iconfont icon-redo'> 回退</i></span>
            <span className='u-split'>|</span>
            <span className='u-btn'><i className='iconfont icon-undo'> 重做</i></span>
            <span className='u-btn'><i className='iconfont icon-redo'> 回退</i></span>
        </div>
    </div>
}