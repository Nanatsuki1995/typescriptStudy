/*
 * @Author: yuanxy 
 * @Date: 2019-05-23 14:20:58 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-23 14:26:00
 */

const initialState = {
    id: 1,
    lock: false,
    style: {
        background: 'red',
        display: 'block',
        height: 100,
        left: 0,
        top: 0,
        width: 100
    },
    expand: true,
    title: '画布',
    visible: true,
    children: [
        {
            children: [],
            cmpOpts: {

            },
            cmpType: 'gl',
            expand: true,
            id: 2,
            lock: false,
            style: {
                background: 'red',
                display: 'block',
                height: 200,
                left: 0,
                top: 0,
                width: 200,

            },
            title: '组件1',
            visible: true

        },
        {
            children: [],
            expand: true,
            id: 3,
            lock: false,
            style: {
                background: 'green',
                display: 'block',
                height: 100,
                left: 200,
                top: 200,
                width: 100,

            },
            title: '组件2',
            visible: true

        }
    ]
}

const editorReducer = (state: any = initialState, action: IAction) => {
    switch (action.type) {
        case 'update':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default editorReducer