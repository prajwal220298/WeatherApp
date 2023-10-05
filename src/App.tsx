import { Route, Routes } from 'react-router-dom'
import './styles.styl'
import Header from './Components/header-footer/Header'
import Homepage from './Components/Homepage'
import Favorites from './Components/Favorites'
import RecentSearch from './Components/RecentSearch'
import Feedback from './Components/Feedback'
import Contact from './Components/Contacts'

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/recentsearch" element={<RecentSearch />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contactus" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
