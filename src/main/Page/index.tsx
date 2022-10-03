import React from 'react'
import { animated, useTransition } from 'react-spring'
import { observer } from 'mobx-react-lite'

import { Container, CssBaseline, ThemeProvider } from '@mui/material'

import App from '../../App'
import { Loader } from '../../components' // NOTE: dirr from main template
import config from '../../config'
import { initTheme } from '../../themes' // NOTE: dirr from main template
import { useContext } from '../context'
import styles from './index.module.css'

const Page = () => {
  const { state, theme } = useContext()
  const transition = useTransition(state.main.isLoader, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 250 },
  })

  const updateTheme = React.useMemo(
    () =>
      initTheme(config.theme, {
        palette: {
          mode: state.main.isDarkTheme ? 'dark' : 'light',
        },
      }),
    [state.main.isDarkTheme],
  )

  return (
    <div className={styles.page_main}>
      {theme ? (
        <ThemeProvider theme={updateTheme}>
          <CssBaseline />
          <Container className={styles.page_main} maxWidth="xl">
            <App />
          </Container>
        </ThemeProvider>
      ) : (
        <App />
      )}
      {transition(
        (data, item) =>
          item && (
            <animated.div
              style={{
                width: '35px',
                height: '35px',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                ...data,
              }}
            >
              <Loader />
            </animated.div>
          ),
      )}
    </div>
  )
}

export default observer(Page)
