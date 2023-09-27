import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux'
import reducers from './Reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // inOrder to show the state value in Browser
const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default Store
