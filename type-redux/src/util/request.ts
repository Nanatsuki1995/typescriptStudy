import * as Mock from 'mockjs'
import ReconnectingWebSocket from 'reconnecting-websocket'
import config from '../config'
import mocks from '../mock'
import { realUrl } from './apiloader'

/**
 * @des get post 请求
 * @param path 路径
 * @param params 传递参数
 * @param callback 回调函数
 */


const { mock, host, wsHost } = config
export async function fetchApi(path: string, params: any, method: string) {

    const isMock = mock
    if (isMock) {
        for (const k in mocks) {
            if (mocks[k].url === path) {
                return Mock.mock(mocks[k].mock)
            }
        }
    } else {
        const url = realUrl(host + path, params)
        return fetch(url, {
            method,
            mode: 'cors',
            credentials: "include", // 跨域请求时是不带cookie的，添加该属性表示强制加入凭据头,请求时就会携带cookie。但是如果加上这个属性，那么服务器的Access-Control-Allow-Origin 就不能是‘*’，否则会报下面的错误。
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: method === 'POST' ? JSON.stringify(params) : null
        }).then(res => {
            return res.json();
        }).then(json => {
            return json;
        })
    }
}

/**
 * @des socket请求
 * @param path 路径
 * @param params 传递参数
 * @param callback 回调
 */
export async function fetchSocket(path: string, params: any,successAction:(payload:any)=>any) {
    const ws = new ReconnectingWebSocket(wsHost + path, [])
    return await new Promise((resolve)=>{
        ws.onmessage = (message: any) => {
            resolve(successAction({
                ws,
                message
            }))
        }
    })
}