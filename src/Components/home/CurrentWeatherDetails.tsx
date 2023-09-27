import React, { useCallback, useEffect } from 'react'
import { fetchCurrentWeatherDetails } from '../../Redux/Actions/WeatherActions'
import { connect } from 'react-redux'
import { RootState } from '../../Redux/Reducers'
import { ThunkDispatch } from 'redux-thunk'
import { WeatherState } from '../../Redux/types'
import CircularProgress from '@mui/material/CircularProgress'
import WeatherDetails from './WeatherDetails'

interface DispatchProps {
  fetchWeatherData: (latitude: number, longitude: number) => void
}
interface StateProps {
  weatherStateValue: WeatherState | null
}
type Props = StateProps & DispatchProps
const CurrentWeatherDetails = ({
  weatherStateValue,
  fetchWeatherData,
}: Props) => {
  const getGeolocation = useCallback(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude: number = position.coords.latitude
        const longitude: number = position.coords.longitude
        fetchWeatherData(latitude, longitude)
      })
    }
  }, [])

  useEffect(() => {
    getGeolocation()
  }, [getGeolocation])

  return (
    <>
      {weatherStateValue?.loading ? (
        <CircularProgress />
      ) : (
        <>
          {weatherStateValue?.errorMsg !== '' ? (
            <h1>Data illa !!!!!- {weatherStateValue?.errorMsg}</h1>
          ) : (
            <>
              <WeatherDetails weatherReport={weatherStateValue?.weatherData} />
            </>
          )}
        </>
      )}
    </>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    weatherStateValue: state.weatherReducer,
  }
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    fetchWeatherData: async (latitude, longitude) => {
      dispatch(fetchCurrentWeatherDetails(latitude, longitude))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeatherDetails)
