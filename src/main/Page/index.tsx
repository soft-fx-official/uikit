import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Container, CssBaseline, ThemeProvider } from '@mui/material'

import App from '../../App'
import config from '../../config'
import { initTheme } from '../../themes'
import { useContext } from '../context'
import styles from './index.module.css'

const Page = () => {
  const { state, theme } = useContext()

  const updateTheme = React.useMemo(
    () =>
      initTheme(config.theme, {
        palette: {
          mode: state.main.isDarkTheme ? 'dark' : 'light',
        },
      }),
    [state.main.isDarkTheme],
  )

  return theme ? (
    <ThemeProvider theme={updateTheme}>
      <CssBaseline />
      <Container className={styles.main} maxWidth="xl">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  ) : (
    <App />
  )
}

export default observer(Page)
