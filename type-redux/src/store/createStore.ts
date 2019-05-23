/*
 * @Author: yuanxy 
 * @Date: 2019-05-23 13:38:23 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2019-05-23 14:36:53
 */
import createSagaMiddleware from 'redux-saga'
import fetch from '../middleware/fetch'
import applyMiddleware from '../middleware/index'
import logger from '../middleware/logger'
import {makeRootReducer} from '../reducer/combinReducer'
import Store from '../store'

const sagaMiddleware=createSagaMiddleware()
const reducers = makeRootReducer()
const store= applyMiddleware(new Store(reducers, {}), [fetch,sagaMiddleware,logger])
const runSaga=(saga:any)=>{
    sagaMiddleware.run(saga)
}

export{
    store,
    runSaga
}