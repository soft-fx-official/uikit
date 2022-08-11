import React from 'react'

import { Box } from '@mui/material'

import { Content } from './Content'
import { Header } from './Header'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'

const App = () => (
  <Box sx={{ padding: '10px 0' }}>
    <Header />
    <Content />
  </Box>
)

export default App
