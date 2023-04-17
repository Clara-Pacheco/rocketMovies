import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'


import { MovieInfo } from './Pages/MovieInfo/MovieInfo.jsx'
import { SignIn } from './Pages/SignIn/SignIn.jsx'
import { SignUp } from './Pages/SignUp/SignUp.jsx'
import { Profile } from './Pages/Profile/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
