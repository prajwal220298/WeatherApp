import { WeatherData } from '../../Redux/types'
import { Box } from '@mui/material'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import './Details.styl'
interface StateProps {
  weatherReport: WeatherData | null
}
type Props = StateProps

const WeatherDetails = ({ weatherReport }: Props) => {
  return (
    <Box sx={{ padding: '30px 10px', paddingTop: '100px' }}>
      {weatherReport === null ? (
        <h1>Something went wrong, please check the CityName </h1>
      ) : (
        <>
          <Box className="weatherDetailsContainer">
            <LeftContainer weatherReport={weatherReport} />
            <RightContainer weatherReport={weatherReport} />
          </Box>
        </>
      )}
    </Box>
  )
}

export default WeatherDetails
