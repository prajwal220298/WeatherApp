import React, { useCallback, useEffect } from 'react'
import { fetchCurrentWeatherDetails } from '../../Redux/Actions/WeatherActions'
import { connect } from 'react-redux'
import { RootState } from '../../Redux/Reducers'
import { ThunkDispatch } from 'redux-thunk'
import { WeatherState } from '../../Redux/types'
import CircularProgress from '@mui/material/CircularProgress'
import { Box, Stack } from '@mui/material'
import WeatherDetails from './WeatherDetails'
// import { getBgImage } from '../../services/utility'
import bgImg from '../../assets/WeatherBgImg.png'

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
  // const [bgImg, setBgImg] = useState<string>('')

  // const getImage = useCallback(async () => {
  //   const image = await getBgImage(weatherStateValue?.weatherData)
  //   setBgImg(image.photos[0].src.landscape)
  // }, [weatherStateValue?.weatherData])

  const getGeolocation = useCallback(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude: number = position.coords.latitude
        const longitude: number = position.coords.longitude
        fetchWeatherData(latitude, longitude)
        // getImage()
      })
    }
  }, [fetchWeatherData])

  useEffect(() => {
    getGeolocation()
  }, [getGeolocation])
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: {
          xs: '100%',
          lg: '100vh',
        },
      }}
    >
      {weatherStateValue?.loading ? (
        <Stack alignItems="center" sx={{ padding: '180px' }}>
          <CircularProgress />
        </Stack>
      ) : (
        <>
          {weatherStateValue?.errorMsg !== '' ? (
            <h1>
              {weatherStateValue?.errorMsg} - Please provide the proper City
              name
            </h1>
          ) : (
            <>
              {weatherStateValue?.weatherData != null && (
                <>
                  <WeatherDetails
                    weatherReport={weatherStateValue?.weatherData}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </Box>
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
