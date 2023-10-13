import {
  Box,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlaceIcon from '@mui/icons-material/Place'
import './Details.styl'
import { WeatherData } from '../../Redux/types'
import { getWeatherIcon } from '../../services/utility'
import { connect } from 'react-redux'
import {
  addToFavorites,
  changeFavouriteState,
  removeFromFavorites,
} from '../../Redux/Actions/WeatherActions'
import { ThunkDispatch } from 'redux-thunk'

const ButtonStyle = {
  color: '#ccc',
  borderRadius: '0px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#111',
  },
}
type Temp = {
  isFahrenheit: boolean
  fahrenheit: string
}
interface DispatchProps {
  changeTheFavouriteState: (details: WeatherData) => void
  addToFavorites: (details: WeatherData) => void
  removeFromFavorites: (details: number) => void
}
interface StateProps {
  weatherReport: WeatherData
}
type Props = StateProps & DispatchProps

const LeftContainer = ({
  weatherReport,
  changeTheFavouriteState,
  addToFavorites,
  removeFromFavorites,
}: Props) => {
  const [fahrenheit, setFahrenheit] = useState<Temp>({
    isFahrenheit: false,
    fahrenheit: '',
  })
  const [alignment, setAlignment] = React.useState('left')

  const weatherIcon = getWeatherIcon(weatherReport)

  const handleAddtoFav = (details: WeatherData) => {
    changeTheFavouriteState({ ...details, isFavourite: true })
    addToFavorites({ ...details })
  }
  const handleRemoveFromFav = (details: WeatherData) => {
    changeTheFavouriteState({ ...details, isFavourite: false })
    removeFromFavorites(details.id)
  }

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment)
  }
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
    <Box>
      <Box className="leftContainer">
        <IconButton sx={{ cursor: 'default' }}>
          <PlaceIcon sx={{ fontSize: '28px' }} />
          <Typography variant="h4">{weatherReport?.name}</Typography>
        </IconButton>
        <Box>
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
      <Box className="letContainerImage">
        <img src={weatherIcon} alt="weather-icon" />
      </Box>
      <Box className="leftContent">
        {!fahrenheit.isFahrenheit ? (
          <Typography variant="h1">
            {weatherReport?.main?.temp.toFixed(2)}
          </Typography>
        ) : (
          <Typography variant="h1">{fahrenheit.fahrenheit}</Typography>
        )}
        <ToggleButtonGroup
          exclusive
          value={alignment}
          onChange={handleChange}
          aria-label="text alignment"
          sx={{
            marginLeft: '20px',
            color: '#fff',
            '& .Mui-selected': {
              color: '#000',
              background: '#fff',
            },
          }}
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
            onClick={() => convertToFahrenheit(weatherReport?.main?.temp)}
          >
            &deg;F
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="h4">
          {weatherReport?.weather[0]?.description}
        </Typography>
      </Box>
    </Box>
  )
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    changeTheFavouriteState: async (details) => {
      dispatch(changeFavouriteState(details))
    },
    addToFavorites: async (details) => {
      dispatch(addToFavorites(details))
    },
    removeFromFavorites: async (details) => {
      dispatch(removeFromFavorites(details))
    },
  }
}
export default connect(null, mapDispatchToProps)(LeftContainer)
