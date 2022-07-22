import React from 'react'
import { observer } from 'mobx-react-lite'

import { Box } from '@mui/material'

import { Content } from './Content'
import { Header } from './Header'

const App = () => (
  <Box>
    <Header />
    <Content />
  </Box>
)

const observerApp = observer(App)
export { observerApp as App }
