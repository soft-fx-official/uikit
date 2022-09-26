import React from 'react'

import { Box, BoxProps } from '@mui/material'

import { colors } from '../../themes/colors'

const DESKTOP_SIZE = 250
const MOBILE_SIZE = 140

type ButtonCardProps = BoxProps

const ButtonCard: React.FC<ButtonCardProps> = ({ sx = {}, ...props }) => (
  <Box
    {...props}
    sx={theme => {
      const isDarkTheme = theme.palette.mode === 'dark'
      // todo move to theme var
      return {
        width: DESKTOP_SIZE,
        height: DESKTOP_SIZE,
        color: isDarkTheme ? 'text.primary' : colors.dark['500'],
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '8px',
        gap: '20px',
        border: `1px solid`,
        borderColor: isDarkTheme ? theme.palette.grey['300'] : colors.dark['50'],
        borderRadius: '24px',
        backgroundColor: isDarkTheme ? 'background.paper' : colors.light['A300'],
        transition: 'background-color .2s, border-color .2s',
        '&:hover': {
          borderColor: isDarkTheme ? 'text.primary' : colors.success['400'],
          backgroundColor: isDarkTheme ? '#20242a' : colors.success['A200'],
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
      }
    }}
  />
)

export { ButtonCard }
