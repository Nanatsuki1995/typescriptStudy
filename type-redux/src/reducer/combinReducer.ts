/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:29 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-23 14:38:55
 */
import defaultReducer from '../reducer/default'
import editorReducer from '../reducer/editor'

export const makeRootReducer = (asyncReducers?: any[]) => {
    return combinReducer({
        ...asyncReducers,
        // 预置reducer
        defaultReducer,
        editorReducer
    })
}

const combinReducer = (reducers: {}) => {
    const finalState = {}
    return (state: any, action: IAction) => {
        // tslint:disable-next-line:forin
        for (const k in reducers) {
            finalState[k] = reducers[k](state[k], action)
        }
        return finalState
    }
}

export function injectAsyncReducer(store: IStore<any>, name: string, asyncReducer: any) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export default combinReducer