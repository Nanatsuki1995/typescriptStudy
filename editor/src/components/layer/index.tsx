import * as React from 'react'
import {DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DragItem from './dragItem'
import './index.scss'
import {Tree} from './tree/index'

const data={
    id:1,
    title:'根目录',
    // tslint:disable-next-line:object-literal-sort-keys
    children:[
        {
            id:2,
            title:'一级目录',
            // tslint:disable-next-line:object-literal-sort-keys
            children:[
                {
                    id:3,
                    title:'二级目录',
                    // tslint:disable-next-line:object-literal-sort-keys
                    children:[
                        {
                            id:4,
                            title:'三级目录',
                            // tslint:disable-next-line:object-literal-sort-keys
                            children:[]
                        }
                    ],
                },
                {
                    id:5,
                    title:'5级目录',
                    // tslint:disable-next-line:object-literal-sort-keys
                    children:[
                        {
                            id:6,
                            title:'6级目录',
                            // tslint:disable-next-line:object-literal-sort-keys
                            children:[]
                        }
                    ],
                }
            ]
        }
    ]
}

const tree=new Tree(data)

interface INode{
    id:number
    title:string
    children?:INode[] | undefined
}

class Layer extends React.Component<{},{data:INode}>{

    constructor(props:React.Props<any>){
        super(props)
        this.state={
            data:tree.root 
        }
    }

    public removeItem(id:number){
        tree.removeNode(id)
        this.setState({
            data:tree.root
        })
    }

    public renderDragItem=(treeData:INode):any=>{
        let result
        if(treeData.children){
            for(const i of treeData.children){
                result=treeData.children.map(v=>{
                    let node=(<DragItem key={v.id} id={v.id} title={v.title}/>)
                    if(i.children && i.children.length){
                        node=(<DragItem key={v.id} id={v.id} title={v.title}>{
                            this.renderDragItem(i)
                        }</DragItem>)
                    }
                    return node
                })
            }
        }
        return result
    }

    public render(){
        return <div className='m-layer'>
            <div className='m-title'><span>图层</span></div>
            <div className='m-btn-group'>
                <div className='u-btn'><i className='iconfont icon-suo' /></div>
                <div className='u-btn'><i className='iconfont icon-jiantou-copy' /></div>
                <div className='u-btn'><i className='iconfont icon-jiantou' /></div>
                <div className='u-btn'><i className='iconfont icon-verticalaligntop' /></div>
                <div className='u-btn'><i className='iconfont icon-verticalalignbottom' /></div>
                <div className='u-btn'><i className='iconfont icon-shanchu' /></div>
            </div>
            <div className='m-layer-tree'>
                {
                    this.renderDragItem(this.state.data)
                }
            </div>
        </div>
    }
}
export default DragDropContext(HTML5Backend)(Layer)