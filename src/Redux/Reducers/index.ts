import { reducer as reduxFormReducer } from 'redux-form'
import { combineReducers, compose } from 'redux'
import { currentWeatherReducer } from './WeatherReducer'
import favoriteReducer from './FavoriteReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const reducers = combineReducers({
  weatherReducer: currentWeatherReducer,
  favorite: favoriteReducer,
  form: reduxFormReducer,
})
export type RootState = ReturnType<typeof reducers>

export default reducers
