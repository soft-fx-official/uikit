import React from 'react'
import { observer } from 'mobx-react-lite'

import { CssBaseline, Container } from '@mui/material'
import App from '../App'

import styles from './index.module.css'
import ThemeContextProvider from '../../theme/context'

function Page() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Container className={styles.main} maxWidth="xl">
        <App />
      </Container>
    </ThemeContextProvider>
  )
}

export default observer(Page)
