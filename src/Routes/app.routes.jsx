import { Routes, Route } from 'react-router-dom'

import { CreateMovie } from '../Pages/CreateMovie/CreateMovie'
import { Home } from '../Pages/Home/Home'
import { MoviePreview } from '../Pages/MoviePreview/MoviePreview'
import { Profile } from '../Pages/Profile/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
      <Route path="/profile" element= {<Profile />} />
  </Routes>
  )
 
}