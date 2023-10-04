import * as React from 'react'
import { WeatherData } from '../../Redux/types'

const PEXEL_API_KEY = process.env.REACT_APP_PEXEL_IMAGE_API_KEY

const config = {
  headers: {
    Authorization: `${PEXEL_API_KEY}`,
    'Content-Type': 'application/json',
  },
}

const WeatherDetails = (props: { weatherReport: WeatherData | null }) => {
  const { weatherReport } = props
  const [bgImg, setBgImg] = React.useState<string>('')

  const getBgImage = React.useCallback(async () => {
    if (weatherReport !== null) {
      const img = await fetch(
        `https://api.pexels.com/v1/search?query=${weatherReport.weather[0].main}&per_page=1`,
        config
      )
      const image = await img.json()
      console.log('----->> img >> ', image.photos[0].src.landscape)
      setBgImg(image.photos[0].src.landscape)
    }
  }, [weatherReport])

  React.useEffect(() => {
    getBgImage()
  }, [getBgImage])

  return (
    <div>
      {weatherReport === null ? (
        <h1>Something went wrong, please check the entered City name </h1>
      ) : (
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>Weather Details </h1>
          <p>{weatherReport.main.temp} °C</p>
          <p>weather lat : {weatherReport.coord.lat}</p>
          <p>weather lon : {weatherReport.coord.lon}</p>
          <p>{weatherReport.name}</p>
          <p>{weatherReport.sys.country}</p>
          <p>{weatherReport.weather[0].description}</p>
          <p>{weatherReport.weather[0].main}</p>
        </div>
      )}
    </div>
  )
}

export default WeatherDetails
