import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux'
import reducers from './Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // inOrder to show the state value in Browser
const Store = createStore(reducers, composeEnhancers(applyMiddleware()))

export default Store
