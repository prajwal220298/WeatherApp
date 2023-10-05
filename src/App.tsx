import { Route, Routes } from 'react-router-dom'
import './styles.styl'
import Header from './Components/header-footer/Header'
import Favorites from './Components/Favorites'
import CurrentWeatherDetails from './Components/home/CurrentWeatherDetails'
import Feedback from './Components/feedback/Feedback'
import Contact from './Components/Contacts'
import RecentSearch from './Components/recent-search/RecentSearch'

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<CurrentWeatherDetails />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/recentsearch" element={<RecentSearch />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contactus" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
