import React from 'react'

import { Box, styled } from '@mui/material'

const DESKTOP_SIZE = 250
const MOBILE_SIZE = 140

const ButtonCard = styled(Box)(({ theme }) => ({
  width: DESKTOP_SIZE,
  height: DESKTOP_SIZE,
  color: theme.palette.card?.color,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '8px',
  gap: '20px',
  border: `1px solid`,
  borderColor: theme.palette.card?.border,
  borderRadius: '24px',
  backgroundColor: theme.palette.card?.background,
  transition: 'background-color .2s, border-color .2s',
  '&:hover': {
    borderColor: theme.palette.card?.hover.border,
    backgroundColor: theme.palette.card?.hover.background,
  },
  svg: {
    height: '80px',
    width: 'auto',
  },
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    width: MOBILE_SIZE,
    height: MOBILE_SIZE,
    gap: '12px',
    svg: {
      height: '48px',
    },
  },
}))

export { ButtonCard }
