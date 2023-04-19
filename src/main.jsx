import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'


import { SignIn } from './Pages/SignIn/SignIn.jsx'
import { SignUp } from './Pages/SignUp/SignUp.jsx'
import { Profile } from './Pages/Profile/Profile.jsx'
import { MoviePreview } from './Pages/MoviePreview/MoviePreview.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { CreateMovie } from './Pages/CreateMovie/CreateMovie.jsx'
import { Routes } from './Routes/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
