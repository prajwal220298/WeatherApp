import { RootState } from '../../Redux/Reducers'
import { connect } from 'react-redux'
import { WeatherData } from '../../Redux/types'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  IconButton,
  Card,
  CardContent,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { removeFromFavorites } from '../../Redux/Actions/WeatherActions'

const Favorites = ({ favoriteState, removeFromFavorites }: any) => {
  const { favItems } = favoriteState

  const handleRemoveFromFav = (id: number) => {
    removeFromFavorites(id)
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '80px',
          marginTop: '10px',
        }}
      >
        {favItems.length === 0 ? (
          ''
        ) : (
          <Typography variant="subtitle1">
            {favItems.length} City added as favourite
          </Typography>
        )}
      </Box>

      {favItems.length === 0 ? (
        <Box
          sx={{
            paddingTop: '180px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'Bold' }} gutterBottom>
            <Card>
              <CardContent>No Favourites Found!</CardContent>
            </Card>
          </Typography>
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ padding: '60px', background: 'transparent' }}
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
              {favItems.map((fav: WeatherData) => (
                <TableRow
                  key={fav.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    color: '#fff',
                  }}
                >
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell
                    style={{ width: 400 }}
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
                  <TableCell align="left" sx={{ color: '#fff' }}>
                    {fav?.isFavourite ? (
                      <IconButton>
                        <FavoriteBorderIcon />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <FavoriteIcon
                          onClick={() => handleRemoveFromFav(fav?.id)}
                          sx={{ color: '#F6BA6F' }}
                        />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    favoriteState: state.favorite,
  }
}

const mapDispatchToProps = {
  removeFromFavorites,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
