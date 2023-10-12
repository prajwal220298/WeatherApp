import React, { useState } from 'react'
import { WeatherData } from '../../Redux/types'
import {
  Box,
  IconButton,
  CardMedia,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import {
  addToFavorites,
  changeFavouriteState,
  removeFromFavorites,
} from '../../Redux/Actions/WeatherActions'
import { getWeatherIcon } from '../../services/utility'

type Temp = {
  isFahrenheit: boolean
  fahrenheit: string
}

const ButtonStyle = {
  color: '#ccc',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#111',
  },
}

interface DispatchProps {
  changeTheFavouriteState: (details: WeatherData) => void
  addToFavorites: (details: WeatherData) => void
  removeFromFavorites: (details: number) => void
}
interface StateProps {
  weatherReport: WeatherData | null
}
type Props = StateProps & DispatchProps

const WeatherDetails = ({
  weatherReport,
  changeTheFavouriteState,
  addToFavorites,
  removeFromFavorites,
}: Props) => {
  const weatherIcon = getWeatherIcon(weatherReport)

  const handleAddtoFav = (details: WeatherData) => {
    console.log('added...')
    changeTheFavouriteState({ ...details, isFavourite: true })
    addToFavorites({ ...details })
  }
  const handleRemoveFromFav = (details: WeatherData) => {
    console.log('removed...')
    changeTheFavouriteState({ ...details, isFavourite: false })
    removeFromFavorites(details.id)
  }

  const [fahrenheit, setFahrenheit] = useState<Temp>({
    isFahrenheit: false,
    fahrenheit: '',
  })
  const convertToFahrenheit = (celsius: number) => {
    const fahrenheit = ((9 * celsius + 32 * 5) / 5).toFixed(2)
    setFahrenheit({
      fahrenheit: fahrenheit,
      isFahrenheit: true,
    })
  }
  const convertTocelsius = () => {
    setFahrenheit({
      fahrenheit: '',
      isFahrenheit: false,
    })
  }

  return (
    <Box sx={{ padding: '30px 10px' }}>
      {weatherReport === null ? (
        <h1>Something went wrong, please check the CityName </h1>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              elevation={24}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: ' 0 26px 42px rgba(0, 0, 0, 0.1)',
                width: {
                  xs: '500px',
                  md: '700px',
                },
                height: {
                  xs: '400px',
                  md: '400px',
                  lg: '400px',
                },
              }}
            >
              <CardContent>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 'Bold',
                      // paddingLeft: '8px',
                      fontSize: '22px',
                    }}
                  >
                    {weatherReport?.name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      alignItems: 'center',
                    }}
                  >
                    {weatherReport?.isFavourite ? (
                      <>
                        <IconButton>
                          <FavoriteIcon
                            sx={{ color: '#4c3f6a', cursor: 'pointer' }}
                            onClick={() => {
                              handleRemoveFromFav(weatherReport)
                            }}
                          />
                        </IconButton>
                        <Typography component="span" sx={{ color: '#4c3f6a' }}>
                          Added to Favourite
                        </Typography>
                      </>
                    ) : (
                      <>
                        <IconButton>
                          <FavoriteBorderIcon
                            sx={{ color: '#4c3f6a', cursor: 'pointer' }}
                            onClick={() => {
                              handleAddtoFav(weatherReport)
                            }}
                          />
                        </IconButton>
                        <Typography component="span" sx={{ color: '#4c3f6a' }}>
                          Add to Favourite
                        </Typography>
                      </>
                    )}
                  </Box>
                </Box>
                <Box>
                  <CardMedia
                    sx={{
                      height: 80,
                      width: 150,
                      left: 0,
                      margin: '0 auto',
                    }}
                    title="icon"
                    image={weatherIcon}
                  />
                  <Box sx={{ textAlign: 'center' }}>
                    {!fahrenheit.isFahrenheit ? (
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '60px',
                          display: 'inline-block',
                          color: '#451952',
                          fontWeight: 'Bold',
                        }}
                      >
                        {weatherReport?.main?.temp}
                      </Typography>
                    ) : (
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '60px',
                          display: 'inline-block',
                          color: '#451952',
                          fontWeight: 'Bold',
                        }}
                      >
                        {fahrenheit.fahrenheit}
                      </Typography>
                    )}

                    <ToggleButtonGroup
                      exclusive
                      aria-label="text alignment"
                      color="success"
                      sx={{ marginLeft: '20px' }}
                    >
                      <ToggleButton
                        value="left"
                        aria-label="left aligned"
                        onClick={convertTocelsius}
                        sx={ButtonStyle}
                      >
                        &deg;C
                      </ToggleButton>
                      <ToggleButton
                        value="center"
                        aria-label="centered"
                        sx={ButtonStyle}
                        onClick={() =>
                          convertToFahrenheit(weatherReport?.main?.temp)
                        }
                      >
                        &deg;F
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography
                      sx={{
                        color: '#451952',
                        padding: '20px',
                        textTransform: 'capitalize',
                      }}
                      variant="h5"
                    >
                      {weatherReport?.weather[0]?.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </>
      )}
    </Box>
  )
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    changeTheFavouriteState: async (details) => {
      console.log('state changes...')
      dispatch(changeFavouriteState(details))
    },
    addToFavorites: async (details) => {
      console.log('add to favorites...')
      dispatch(addToFavorites(details))
    },
    removeFromFavorites: async (details) => {
      console.log('removed from favorites...')
      dispatch(removeFromFavorites(details))
    },
  }
}

export default connect(null, mapDispatchToProps)(WeatherDetails)
