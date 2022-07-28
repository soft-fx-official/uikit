import React from 'react'

import { Box } from '@mui/material'

const ButtonCardContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box
    sx={theme => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
      [theme.breakpoints.down('sm')]: {
        gap: '8px',
      },
    })}
  >
    {children}
  </Box>
)

export { ButtonCardContainer }
