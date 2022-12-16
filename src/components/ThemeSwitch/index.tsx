import React from 'react'

import BedtimeIcon from '@mui/icons-material/Bedtime'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Stack, styled, Switch, SwitchProps } from '@mui/material'

import styles from './index.module.css'

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    color: '#fff',
    '&:hover': {
      color: theme.palette.text.secondary,
    },
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '&:hover': {
        color: theme.palette.text.secondary,
      },
      '& + .MuiSwitch-track': {
        backgroundColor:
          // @ts-ignore
          theme.palette.mode === 'dark' ? theme.palette.text.dark : theme.palette.text.light,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    transition: 'color 300ms',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))

interface IThemeSwitch {
  isDarkTheme: boolean
  onChange: () => void
}

const ThemeSwitch = ({ isDarkTheme, onChange }: IThemeSwitch) => (
  <Stack direction="row" spacing={1} className={styles.uikit_stackcontainer}>
    <LightModeIcon sx={{ color: isDarkTheme ? 'text.dark' : 'text.dark' }} />
    <IOSSwitch onChange={onChange} checked={isDarkTheme} />
    <BedtimeIcon sx={{ color: isDarkTheme ? '#fff' : 'text.light' }} />
  </Stack>
)

export { ThemeSwitch }
