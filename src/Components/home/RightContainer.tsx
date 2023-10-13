import { Box, Typography } from '@mui/material'
import React from 'react'
import SmallCards from './SmallCards'
import './Details.styl'
import moment from 'moment'
import { WeatherData } from '../../Redux/types'

type Props = {
  weatherReport: WeatherData
}

const RightContainer = ({ weatherReport }: Props) => {
  return (
    <Box className="rightContainer">
      <Box className="rightContentText">
        <Typography component="span">{`Today's Hightlights`}</Typography>
      </Box>
      <Box className="rightContent">
        <SmallCards
          title="High Temperature"
          value={`${weatherReport?.main?.temp_max} ${'\u00b0'}C`}
        />
        <SmallCards
          title="Low Temperature"
          value={`${weatherReport?.main?.temp_min} ${'\u00b0'}C`}
        />
        <SmallCards
          title="Humidity"
          value={`${weatherReport?.main?.humidity} %`}
        />
        <SmallCards
          title="Sunrise"
          value={moment.unix(weatherReport?.sys.sunrise).format('h:mm A')}
        />
        <SmallCards
          title="Sunset"
          value={moment.unix(weatherReport?.sys.sunset).format('h:mm A')}
        />
      </Box>
    </Box>
  )
}

export default RightContainer
