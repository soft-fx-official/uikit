import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

import { CancelModalIcon } from '../Icons'
import styles from './index.module.css'

interface IFailed {
  title: string
}

// NOTE: Hotfix

const Failed = ({ title }: IFailed) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      className={styles.uikit_main}
      sx={{
        backgroundColor: 'warning.secondary',
      }}
    >
      <Stack spacing={4} className={styles.uikit_stack}>
        <CancelModalIcon sx={{ fontSize: 150 }} />
        <Typography variant="h5" className={styles.uikit_text}>
          {title}
        </Typography>
      </Stack>
    </Box>
  </div>
)

export { Failed }
export type { IFailed }
