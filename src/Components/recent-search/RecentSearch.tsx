import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../Redux/Reducers'
import { WeatherState } from '../../Redux/types'
import {
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import bgImg from '../../assets/WeatherBgImg.png'

interface StateProps {
  weatherStateValue: WeatherState | null
}
type Props = StateProps
const RecentSearch = ({ weatherStateValue }: Props) => {
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
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          padding: '60px',
          background: 'transparent',
          maxHeight: '400px',
          overflowY: 'scroll',
        }}
      >
        <Table
          sx={{
            minWidth: {
              lg: '400px',
            },
            margin: '0 auto',
            backgroundColor: 'rgba(0,0,0,.1)',
          }}
          aria-label="simple table"
        >
          <TableBody>
            {weatherStateValue?.recentSearch.reverse().map((fav) => (
              <TableRow
                key={fav?.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  color: '#fff',
                }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell
                  style={{ maxWidth: 100 }}
                  align="left"
                  sx={{ color: '#fff', fontWeight: 'Bold', fontSize: '20px' }}
                >
                  {fav?.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#fff', fontWeight: 'Bold', padding: 0 }}
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${fav?.weather[0]?.icon}@2x.png`}
                    alt="icon"
                    style={{ width: '80px' }}
                  />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: '#fff', fontSize: '29px' }}
                >
                  {fav?.main?.temp} &deg;C
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: '#fff',
                    fontSize: '20px',
                    textTransform: 'capitalize',
                  }}
                >
                  {fav?.weather[0]?.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    weatherStateValue: state.weatherReducer,
  }
}

export default connect(mapStateToProps, null)(RecentSearch)
