/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:13 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 22:23:24
 */
import * as invariant from 'invariant'
import mock from '../mock'
import { request } from '../util/index'

const advFetch = (store: IStore<any>) => (dispatch: any) => (action: IAction) => {
    if (action.type) {
        // tslint:disable-next-line:forin
        for (const k in mock) {
            const [path, method] = k.split(' ')
            if (path === action.type) {  
                invariant(mock[k].url, 'url错误')
                const isWebsocket=method==='SOCKET'?true:false
                return dispatch(request(action.type, mock[k].url || '', action.payload, method,isWebsocket))
            }
        }
        return dispatch(action)
    } else {
        const result: any = dispatch(action)
        return result
    }
}


export default advFetch