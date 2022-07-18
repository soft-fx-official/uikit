import React from 'react'
import { observer } from 'mobx-react-lite'

import { Container, CssBaseline } from '@mui/material'

import ThemeContextProvider from '../../theme/context'
import App from '../App'
import styles from './index.module.css'

const Page = () => (
  <ThemeContextProvider>
    <CssBaseline />
    <Container className={styles.main} maxWidth="xl">
      <App />
    </Container>
  </ThemeContextProvider>
)

export default observer(Page)
