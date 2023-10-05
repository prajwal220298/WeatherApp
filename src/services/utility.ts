import { WeatherData } from '../Redux/types'

const ICON_URL = process.env.REACT_APP_WEATHER_ICON_URI

export const getWeatherIcon = (data: WeatherData | null) => {
  const icon = `${ICON_URL}/${data?.weather[0]?.icon}@2x.png`
  return icon
}
