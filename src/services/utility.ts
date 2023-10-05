import { WeatherData } from '../Redux/types'

const ICON_URL = process.env.REACT_APP_WEATHER_ICON_URI
const PEXELS_URl = process.env.REACT_APP_PEXEL_IMAGE_URL
const PEXEL_API_KEY = process.env.REACT_APP_PEXEL_IMAGE_API_KEY

const config = {
  headers: {
    Authorization: `${PEXEL_API_KEY}`,
    'Content-Type': 'application/json',
  },
}

export const getBgImage = async (data: WeatherData | null | undefined) => {
  const img = await fetch(
    `${PEXELS_URl}${data?.weather[0].main}&per_page=1`,
    config
  )
  const image = await img.json()
  return image
}

export const getWeatherIcon = (data: WeatherData | null) => {
  const icon = `${ICON_URL}/${data?.weather[0]?.icon}@2x.png`
  return icon
}
