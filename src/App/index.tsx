import React, { useState } from 'react'

import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'

import config from '../config'
import { initTheme } from '../themes'
import { Content } from './Content'
import { Header } from './Header'
import styles from './index.module.css'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const updateTheme = React.useMemo(
    () =>
      initTheme(config.theme, {
        palette: {
          mode: isDarkTheme ? 'dark' : 'light',
        },
      }),
    [isDarkTheme],
  )

  return (
    <ThemeProvider theme={updateTheme}>
      <CssBaseline />
      <Container className={styles.page_main} maxWidth="xl">
        <Box sx={{ padding: '10px 0' }}>
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <Content />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
