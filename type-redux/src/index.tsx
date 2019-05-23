import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppRouter from './app/appRouter'
import Provider from './redux/provider'
import {store} from './store/createStore'

ReactDOM.render(<Provider store={store}>
    <AppRouter />
</Provider>, document.getElementById('root'))