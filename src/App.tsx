import React from 'react'
import Routes from './screens/routes'
import ContextProvider from './service/context'

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}

export default App
