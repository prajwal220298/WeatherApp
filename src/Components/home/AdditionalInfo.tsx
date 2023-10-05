import {
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Stack,
} from '@mui/material'
import { WeatherData } from '../../Redux/types'
import moment from 'moment'

type Props = {
  additionalInfo: WeatherData
}

const AdditionalInfo = ({ additionalInfo }: Props) => {
  function createData(name: string, value: number | string) {
    return { name, value }
  }

  const rows = [
    createData(
      'High Temperature',
      `${additionalInfo?.main?.temp_max} ${'\u00b0'}C`
    ),
    createData(
      'Low Temperature',
      `${additionalInfo?.main?.temp_min} ${'\u00b0'}C`
    ),
    createData('Humidity', `${additionalInfo?.main?.humidity} %`),
    createData(
      'Sunrise',
      moment.unix(additionalInfo?.sys.sunrise).format('h:mm A')
    ),
    createData(
      'Sunset',
      moment.unix(additionalInfo?.sys.sunset).format('h:mm A')
    ),
  ]
  return (
    <Stack sx={{ paddingBottom: '100px' }}>
      <Typography
        sx={{
          fontWeight: 'Bold',
          paddingLeft: '8px',
          fontSize: '22px',
          textAlign: 'center',
        }}
      >
        Weather Details
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          padding: '10px',
          background: 'transparent',
          width: '60%',
          margin: '0 auto',
        }}
      >
        <Table
          sx={{
            minWidth: {
              lg: '100px',
            },
            margin: '0 auto',
            backgroundColor: 'rgba(0,0,0,.1)',
          }}
          aria-label="simple table"
        >
          <TableBody>
            {rows.map((val) => (
              <TableRow
                key={val.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {val.name}
                </TableCell>

                <TableCell align="center">{val.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}

export default AdditionalInfo
