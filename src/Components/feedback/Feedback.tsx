import { Container, useMediaQuery } from '@mui/material'

import './Feedback.styl'
import MobileFeedback from './MobileFeedback'
import WebFeedback from './WebFeedback'

const Feedback = () => {
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <>
      <Container maxWidth={isMobile ? 'sm' : 'md'}>
        {isMobile ? <MobileFeedback /> : <WebFeedback />}
      </Container>
    </>
  )
}

export default Feedback
