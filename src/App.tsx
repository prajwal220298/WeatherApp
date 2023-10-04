<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import './styles.styl'
import Header from './Components/header-footer/Header'
import Homepage from './Components/Homepage'
import Favorites from './Components/Favorites'
import RecentSearch from './Components/RecentSearch'
import Feedback from './Components/Feedback'
import ContactUs from './Components/ContactUs'
=======
import './styles.css'
// import IMAGE from './react.png'
// import LOGO from './logo.svg'
import { ContactForm } from './Components/ContactForm'
>>>>>>> f04fb77 (contact form)

export const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/recentsearch" element={<RecentSearch />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
=======
      {/* <img src={IMAGE} alt="REACT LOGO" height={200} width={200} />
      <img src={LOGO} alt="REACT LOGO" height={200} width={200} />
      <h1>
        React typescript webpack App - {process.env.NODE_ENV} -{' '}
        {process.env.name} - {process.env.REACT_APP_WEB_URL}
      </h1> */}
      <ContactForm />
>>>>>>> f04fb77 (contact form)
    </>
  )
}
