import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';  //redux 异步 action 中间件
import {createLogger} from 'redux-logger';

const logger = createLogger();

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
    	process.env.NODE_ENV === 'production'
        ? applyMiddleware(thunk)
        : applyMiddleware(thunk, logger),
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}