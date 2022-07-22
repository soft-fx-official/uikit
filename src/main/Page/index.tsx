import React from 'react'
import { observer } from 'mobx-react-lite'

import { Container, CssBaseline } from '@mui/material'

import { App } from '../App'
import { ThemeContextProvider } from '../context'
import styles from './index.module.css'

const Page = () => (
  <ThemeContextProvider>
    <CssBaseline />
    <Container className={styles.main} maxWidth="xl">
      <App />
    </Container>
  </ThemeContextProvider>
)

const observerPage = observer(Page)

export { observerPage as Page }
