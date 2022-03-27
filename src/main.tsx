import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './Layout'
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <Routes />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
