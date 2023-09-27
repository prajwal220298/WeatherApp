import { reducer as reduxFormReducer } from 'redux-form'
import { combineReducers, compose } from 'redux'
import { currentWeatherReducer } from './WeatherReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const reducers = combineReducers({
  weatherReducer: currentWeatherReducer,
  form: reduxFormReducer,
})
export type RootState = ReturnType<typeof reducers>

export default reducers
