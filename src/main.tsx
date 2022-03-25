import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './Layout'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
