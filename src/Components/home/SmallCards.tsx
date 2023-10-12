import React from 'react'
import './SmallCards.styl'
import { Box, Typography } from '@mui/material'

type Props = {
  title: string
  value: string
}
const SmallCards = ({ title, value }: Props) => {
  return (
    <Box className="cardContainer">
      <Typography variant="h5">{title}</Typography>
      <Typography component="span">{value}</Typography>
    </Box>
  )
}

export default SmallCards
