import { Route, Routes } from 'react-router-dom'
import './styles.styl'
import Header from './Components/header-footer/Header'
import Favorites from './Components/Favorites'
import RecentSearch from './Components/RecentSearch'
import Feedback from './Components/Feedback'
import ContactUs from './Components/ContactUs'
import CurrentWeatherDetails from './Components/home/CurrentWeatherDetails'

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<CurrentWeatherDetails />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/recentsearch" element={<RecentSearch />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  )
}
