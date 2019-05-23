/*
 * @Author: yuanxy 
 * @Date: 2019-05-22 16:19:51 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-22 22:33:48
 */

import { call, put, take } from 'redux-saga/effects'
import { injectAsyncReducer } from '../reducer/combinReducer'
import { runSaga, store } from '../store/createStore';
import createAction from './createAction'
import createReducer from './createReducer'
import { fetchApi, fetchSocket } from './request'

/**
 * 请求异常写入globalError
 */
const globalError = createAction('GLOBALE_ERROR', 'payload')


/**
 * @des http请求
 * @param path 
 * @param params 
 * @param requestAction 
 * @param successAction 
 * @param callback 
 */
function* httpSaga(path: string, params: any, method: string, requestAction: string, successAction: (res: any) => any) {

    try {
        yield take(requestAction)
        const res = yield call(fetchApi, path, params, method)
        yield put(successAction(res))
    }
    catch (err) {
        yield put(globalError(err))
    }
}

/**
 * @des socket请求
 * @param path 
 * @param params 
 * @param requestAction 
 * @param successAction 
 */
function* wsSaga(path: string, params: any, method: string, requestAction: string, successAction: (res: any) => any) {
    try {
        yield take(requestAction)
        const res=yield call(fetchSocket, path, params, successAction)
        yield put(res)
    }
    catch (err) {
        yield put(globalError(err))
    }
}

export function request(type: string, path: string, params: any, method: string, isSocket: boolean) {
    const requestAction = 'REQUEST_' + type.toString().toUpperCase()
    const successAction = 'SUCCESS_' + type.toString().toUpperCase()
    const requestActionFun = createAction(requestAction)
    const successActionFun = createAction(successAction, 'payload')
    let saga = isSocket ? wsSaga : httpSaga
    saga = saga.bind(null, path, params, method, requestActionFun, successActionFun)
    runSaga(saga)
    injectAsyncReducer(store, type, createReducer(successAction))
    return requestActionFun
}



