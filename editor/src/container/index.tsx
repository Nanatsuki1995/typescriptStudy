/*
 * @Author: yuanxy 
 * @Date: 2019-01-31 09:51:53 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-01-31 10:45:44
 */
import * as React from 'react'

import Layouts from 'src/components/layout';
import Layer from '../components/layer/index'
import Content from '../components/layout/content'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import Sider from '../components/layout/sider'
import SideToolbar from '../components/layout/sideToolbar'

export default class Index extends React.Component<{},{}>{


    public render(){
        return <Layouts>
            <Header />
            <Content/>
            <Sider />
            <Footer />
            <SideToolbar />
            <Layer />
        </Layouts>
       
    }


}