import { Container, useMediaQuery } from '@mui/material'
import './Contact.styl'
import { MobileView } from './MobileView'

import ContactUs from './ContactUs'
const Contact = () => {
  const isMobile = useMediaQuery('(max-width:900px)')
  console.log('isMobile------------>', isMobile)

  return (
    <>
      <Container maxWidth={isMobile ? 'sm' : 'md'}>
        {isMobile ? <MobileView /> : <ContactUs />}
      </Container>
    </>
  )
}

export default Contact
