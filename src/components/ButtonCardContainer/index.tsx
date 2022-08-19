import React from 'react'

import { Box } from '@mui/material'

interface IButtonCardContainer {
  children: any // NOTE: ts
  sx?: any // NOTE: ts
}

const ButtonCardContainer: React.FC<IButtonCardContainer> = ({ children, sx = {} }) => (
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
      ...(sx as Object),
    })}
  >
    {children}
  </Box>
)

export { ButtonCardContainer }
