import * as React from 'react'


import {
    ConnectDragSource,
    ConnectDropTarget,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor,
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor
} from 'react-dnd'



interface IProps extends React.Props<any> {
    id:number
    title:string
}

interface ISoureCollectedProps {
    isDragging: boolean
    connectDragSource: ConnectDragSource
}
interface ITargetCollectedProps {
    connectDropTarget: ConnectDropTarget
}

const target = {
    drop(props: IProps, monitor: DropTargetMonitor, compent: DragItem) {
        console.log('drag:'+props.id,'drop:'+monitor.getItem().id,123)
        return
    }
   
}
const source = {
    beginDrag(props: IProps) {
        return {
            ...props
        }
    }
}

class DragItem extends React.Component<IProps & ISoureCollectedProps & ITargetCollectedProps>{
    public render() {
        const {
            isDragging,
            connectDragSource,
            connectDropTarget
        } = this.props
        const opacity = isDragging ? 0 : 1
        return connectDragSource(
            connectDropTarget(
                <div className='m-layer-item' style={{opacity}}>
                    <div className='u-visible'>
                        <i className='iconfont icon-chakan' />
                    </div>
                    <span>{this.props.title}
                {
                            this.props.children
                        }
                    </span>
                </div>
            )
        )
    }
}

export default DropTarget<IProps, ITargetCollectedProps>(
    'CARD',
    target,
    (connect: DropTargetConnector) => ({
        connectDropTarget: connect.dropTarget()
    })
)(
    DragSource<IProps, ISoureCollectedProps>(
        'CARD',
        source,
        (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        })
    )(DragItem)
)