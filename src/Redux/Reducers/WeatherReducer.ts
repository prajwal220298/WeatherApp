import { ActionTypes } from '../Constants/ActionTypes'
import { WeatherActions, WeatherState } from '../types'

const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  errorMsg: '',
}

export const currentWeatherReducer = (
  state = initialState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case ActionTypes.FETCH_CURREENT_WEATHER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case ActionTypes.FETCH_CURRENT_WEATHER_DETAILS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        errorMsg: '',
      }
    case ActionTypes.FETCH_CURRENT_WEATHER_DETAILS_FAILURE:
      return { ...state, loading: false, errorMsg: action.payload }
    case ActionTypes.CHANGE_FAVOURITE_STATE:
      return { ...state, loading: false, weatherData: action.payload }
    default:
      return state
  }
}
