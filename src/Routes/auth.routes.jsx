import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../Pages/SignIn/SignIn'
import { SignUp } from '../Pages/SignUp/SignUp'

export function AuthRoutes(){
 return(
  <Routes>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
 )

}