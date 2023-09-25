import { reducer as reduxFormReducer } from 'redux-form'
import { combineReducers, compose } from 'redux'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const reducers = combineReducers({
  form: reduxFormReducer,
})

export default reducers
