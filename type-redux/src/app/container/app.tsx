import * as React from 'react'
import {useContext,useEffect} from 'react'
import {Link,withRouter} from 'react-router-dom'
import context from '../../redux/context'



function App(props:any){
    const {dispatch,state}=useContext(context)
    useEffect(()=>{
        dispatch({type:'test',payload:{
            curPage:'xiaoyu',
            pageSize:'1',
        }})
        dispatch({type:'test2',payload:{ 
            password:111,
            name:123,
            s:321
        }})
        dispatch({type:'wbtest',payload:{ 
            password:111,
            name:123,
            s:321
        }})
        // 发起一个普通的dispatch （需要写reducer逻辑）
        dispatch({
            type:'default',
            payload:'这是一个普通的action请求'
        })
        
    },[])
    console.log(state)

    function autoGoPage(){
        setTimeout(()=>{
            props.history.push('/editor')
        },5000)
    }


    return <div>
        <p>当前路由地址：{props.history.location.pathname}</p>
        <ul>
            <li><Link to='/page1'>页面1</Link></li>
            <li><Link to='/page2'>页面2</Link></li>
            <li onClick={()=>autoGoPage()}><a href='#'>5秒后跳转到编辑器</a></li>
        </ul>
    </div>
}

export default withRouter(App)