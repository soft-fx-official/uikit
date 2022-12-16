import React from 'react'

import { Box, styled } from '@mui/material'

const ButtonCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    gap: '8px',
  },
}))

export { ButtonCardContainer }
