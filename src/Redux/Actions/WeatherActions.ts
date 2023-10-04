import axios from 'axios'
import { ActionTypes } from '../Constants/ActionTypes'
import { WeatherActions } from '../types'
import { RootState } from '../Reducers'
import { ThunkAction } from 'redux-thunk'

const webUrl = process.env.REACT_APP_WEB_URL
const CURRENT_WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY

export const fetchCurrentWeatherDetails =
  (
    lat: number,
    lon: number
  ): ThunkAction<void, RootState, null, WeatherActions> =>
  async (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_CURREENT_WEATHER_DETAILS_REQUEST })
    await axios
      .get(
        `${webUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${CURRENT_WEATHER_API}`
      )
      .then((response) =>
        dispatch({
          type: ActionTypes.FETCH_CURRENT_WEATHER_DETAILS,
          payload: response.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionTypes.FETCH_CURRENT_WEATHER_DETAILS_FAILURE,
          payload: err.message,
        })
      )
  }

export const fetchCurrentWeatherDetailsByCityName =
  (cityName: string): ThunkAction<void, RootState, null, WeatherActions> =>
  async (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_CURREENT_WEATHER_DETAILS_REQUEST })
    await axios
      .get(`${webUrl}?q=${cityName}&units=metric&appid=${CURRENT_WEATHER_API}`)
      .then((response) =>
        dispatch({
          type: ActionTypes.FETCH_CURRENT_WEATHER_DETAILS,
          payload: response.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionTypes.FETCH_CURRENT_WEATHER_DETAILS_FAILURE,
          payload: err.message,
        })
      )
  }
