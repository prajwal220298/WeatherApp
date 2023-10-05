import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchCurrentWeatherDetailsByCityName } from '../../Redux/Actions/WeatherActions'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

interface DispatchProps {
  fetchWeatherDataByCityName: (cityName: string) => void
}

type Props = DispatchProps

const SearchBar = ({ fetchWeatherDataByCityName }: Props) => {
  const [city, setCity] = React.useState<string>('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCity(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    fetchWeatherDataByCityName(city)
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <form onSubmit={handleSubmit}>
        <StyledInputBase
          name="city"
          placeholder="Enter the City Name..."
          inputProps={{ 'aria-label': 'search' }}
          value={city}
          type="search"
          onChange={handleChange}
        />
      </form>
    </Search>
  )
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    fetchWeatherDataByCityName: async (cityName) => {
      dispatch(fetchCurrentWeatherDetailsByCityName(cityName))
    },
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
