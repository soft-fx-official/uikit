import React from 'react'

import { Box, BoxProps } from '@mui/material'

const DESKTOP_SIZE = 250
const MOBILE_SIZE = 140

type ButtonCardProps = BoxProps

const ButtonCard: React.FC<ButtonCardProps> = ({ sx = {}, ...props }) => (
  <Box
    {...props}
    sx={theme => ({
      width: DESKTOP_SIZE,
      height: DESKTOP_SIZE,
      color: 'common.white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '8px',
      gap: '20px',
      border: `1px solid ${theme.palette.grey['300']}`,
      borderRadius: '24px',
      backgroundColor: 'background.paper',
      transition: 'background-color .2s, border-color .2s',
      '&:hover': {
        borderColor: '#ffffff',
        backgroundColor: '#20242a',
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

      ...(sx as Object),
    })}
  />
)

export { ButtonCard }
