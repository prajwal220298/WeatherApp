import React from 'react'
import { WeatherData } from '../../Redux/types'

const WeatherDetails = (props: { weatherReport: WeatherData | null }) => {
  const { weatherReport } = props
  return (
    <div>
      <h1>Weather Details </h1>
      {weatherReport === null ? (
        <h1>Something went wrong </h1>
      ) : (
        <>
          <p>weather lat : {weatherReport.coord.lon}</p>
          <p>weather lon : {weatherReport.coord.lon}</p>
        </>
      )}
    </div>
  )
}

export default WeatherDetails
