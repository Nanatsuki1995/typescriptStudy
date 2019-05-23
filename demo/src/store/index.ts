import { combineReducers, createStore } from 'redux'
import reducers from '../reducer'

import { getItem } from '../util'

const initialReducer: any = {
    paths: getItem('user') ? getItem('user') : []
}

const store = createStore(combineReducers(reducers), { initialReducer })


export default store