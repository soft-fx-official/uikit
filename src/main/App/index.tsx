import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box } from '@mui/material'

import styles from './index.module.css'
import Content from './Content'
import Header from './Header'

function App() {
  return (
    <Box className={styles.main}>
      <Box className={styles.header}>
        <Header />
      </Box>
      <Box className={styles.content}>
        <Content />
      </Box>
    </Box>
  )
}

export default observer(App)
