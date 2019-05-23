


import { ContainerComps, DrawCanvas, DrawRuler, LayerTree } from 'rc-draggable/dist'
import 'rc-draggable/dist/index.css'
import 'rc-draggable/dist/vendors~index.css'
import * as React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import context from '../../redux/context'

function Editor() {

    const { dispatch, state } = useContext(context)

    const width = window.innerWidth - 114
    const height = window.innerHeight - 114

    return <div style={{ margin: 50, border: '1px #666 solid', overflow: 'hidden', boxShadow: '0 0 20px rgba(0,0,0,.5)' }}>
        <DrawCanvas
            width={width}
            height={height}
            zoom={1}
            containerComps={state.editorReducer}
            containerUpdate={(node) => {
                dispatch({
                    type: 'update',
                    payload: node
                })
            }}
        >
            <LayerTree />
            <DrawRuler />
            <ContainerComps />
        </DrawCanvas>
        <Link to='/'>跳转回首页</Link>
    </div>

}

export default Editor