import React, { useContext } from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Context } from '../../service/context'
import GlobalStyle from '../../styles/global'
import { dark, light } from '../../styles/themes'
import { Home } from '../home'

const Routes: React.FC = () => {
  const { isDark } = useContext(Context)
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
    </ThemeProvider>
  )
}

export default Routes
