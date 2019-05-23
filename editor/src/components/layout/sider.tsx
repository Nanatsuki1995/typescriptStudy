import * as React from 'react'
import './sider.scss'

export default function Sider(){
    return <div className='g-sider'>
        <div className='m-search-comps'>
            <input type='text' className='u-ipt' placeholder='输入组件关键字'/>
        </div>
        <div className='m-group'>
            <div className='m-title'>
                通用组件
            </div>
            <ul className='m-list'>
                <li><i className='iconfont icon-zhuxingtu' />柱状图</li>
                <li><i className='iconfont icon-fsux_tubiao_zhutiheliutu' />图表</li>
                <li><i className='iconfont icon-fsux_tubiao_shuiqiutu' />水球图</li>
                <li><i className='iconfont icon-fsux_tubiao_dongtaiguijiditu' />动态地图</li>
                <li><i className='iconfont icon-fsux_tubiao_jinzitatu' />金字塔</li>
                <li><i className='iconfont icon-fsux_tubiao_huchanglianjietu' />弧长链接图</li>
            </ul>
        </div>

        <div className='m-group'>
            <div className='m-title'>
                工具组件
            </div>
            <ul className='m-list'>
            <li><i className='iconfont icon-redo' />分布曲线图</li>
                <li><i className='iconfont icon-fsux_tubiao_fenbuquxiantu' />分布曲线图</li>
                <li><i className='iconfont icon-fsux_tubiao_huiguiquxiantu' />回归曲线图</li>
                <li><i className='iconfont icon-fsux_tubiao_luoxuantu' />螺旋图</li>
                <li><i className='iconfont icon-fsux_tubiao_qiajitu' />卡吉图</li>
                <li><i className='iconfont icon-fsux_tubiao_hexiantu' />和弦图</li>
            </ul>
        </div>

        <div className='m-group'>
            <div className='m-title'>
                可视化组件
            </div>
            <ul className='m-list'>
            <li><i className='iconfont icon-redo' />分布曲线图</li>
                <li><i className='iconfont icon-fsux_tubiao_fenbuquxiantu' />分布曲线图</li>
                <li><i className='iconfont icon-fsux_tubiao_huiguiquxiantu' />回归曲线图</li>
                <li><i className='iconfont icon-fsux_tubiao_luoxuantu' />螺旋图</li>
                <li><i className='iconfont icon-fsux_tubiao_qiajitu' />卡吉图</li>
                <li><i className='iconfont icon-fsux_tubiao_hexiantu' />和弦图</li>
            </ul>
        </div>


        <div className='m-group'>
            <div className='m-title'>
                可视化组件
            </div>
            <ul className='m-vis-list'>
                <li><img src={require('./assets/imgs/nopic.png')} /><span>柱状图</span></li>
                <li><img src={require('./assets/imgs/nopic.png')} /><span>柱状图</span></li>
                <li><img src={require('./assets/imgs/nopic.png')} /><span>柱状图</span></li>
                <li><img src={require('./assets/imgs/nopic.png')} /><span>柱状图</span></li>
                <li><img src={require('./assets/imgs/nopic.png')} /><span>柱状图</span></li>
            </ul>
        </div>



    </div>
}
