import { ActionTypes } from './Constants/ActionTypes'

export interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface WeatherData {
  base: string
  clouds: {
    all: number
  }
  cod: number
  coord: {
    lon: number
    lat: number
  }
  dt: number
  id: number
  isFavourite: boolean
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
  }
  timezone: number
  visibility: number
  weather: Weather[]
  wind: {
    speed: number
    deg: number
  }
}

export interface WeatherState {
  weatherData: WeatherData | null
  loading: boolean
  errorMsg: string
}

export interface FavoriteState {
  favItems: Array<WeatherData | null>
}

interface GetWeatherAction {
  type: typeof ActionTypes.FETCH_CURRENT_WEATHER_DETAILS
  payload: WeatherData
}

interface SetLoadingAction {
  type: typeof ActionTypes.FETCH_CURREENT_WEATHER_DETAILS_REQUEST
  payload?: any
}

interface SetErrorAction {
  type: typeof ActionTypes.FETCH_CURRENT_WEATHER_DETAILS_FAILURE
  payload: string
}

export type WeatherActions =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction
