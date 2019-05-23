/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:18:56 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 21:48:44
 */

export default function applyMiddleware(store: IStore<any>, middlewares: any[]) {
    middlewares = middlewares.slice()  // 返回新数组
    middlewares.reverse() // 反转
    const dispatch = store.dispatch
    const mDispatch = middlewares.reduce((prevMiddleware: any, nextMiddleware: any) => (stores: IStore<any>) => (dispatchs: (action: IAction) => IAction) => {
        return prevMiddleware(stores)(nextMiddleware(stores)(dispatchs))
    })
    store.dispatch = mDispatch(store)(dispatch)
    return store
}


