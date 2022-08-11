import { Theme, ThemeOptions } from '@mui/material'

import { colors } from './colors'

interface ITheme {
  theme: Theme
}

export const theme: ThemeOptions = {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          bgColor: theme.palette.background.default,
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
        variant: 'subtitle1',
        color: 'text.primary',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          backgroundColor: 'inherit',
          borderRadius: '6px',
          border: `1px solid ${theme.palette.secondary.main}`,
          transition: 'border-color .2s',
          '&:hover': {
            backgroundColor: 'inherit',
            border: `1px solid white`,
          },
          '&.Mui-focused': {
            backgroundColor: 'inherit',
            border: `1px solid white`,
          },
          '&.Mui-error': {
            border: `1px solid ${theme.palette.warning.main}`,
          },
          '&.MuiInputBase-colorSuccess': {
            borderColor: theme.palette.success.main,
          },
          '& .MuiButtonBase-root': {
            color: theme.palette.secondary.main,
          },
          '&.Mui-focused .MuiButtonBase-root': {
            color: 'white',
          },
          '&:hover .MuiButtonBase-root': {
            color: 'white',
            transition: 'color .2s',
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          backgroundColor: 'inherit',
          borderRadius: '6px',
          border: `1px solid ${theme.palette.secondary.main}`,

          transition: 'border-color .2s',
          '&:hover': {
            backgroundColor: 'inherit',
            border: `1px solid white`,
          },
          '&.Mui-focused': {
            backgroundColor: 'inherit',
            border: `1px solid white`,
          },
          '&.Mui-error': {
            border: `1px solid ${theme.palette.warning.main}`,
          },
          '&.MuiInputBase-colorSuccess': {
            borderColor: theme.palette.success.main,
          },
          '& .MuiButtonBase-root': {
            color: theme.palette.secondary.main,
          },
          '&.Mui-focused .MuiButtonBase-root': {
            color: 'white',
          },
          '&:hover .MuiButtonBase-root': {
            color: 'white',
            transition: 'color .2s',
          },

          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          color: theme.palette.secondary.main,
          '&.Mui-error': {
            color: theme.palette.warning.main,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          '&.Mui-focused': {
            color: 'white',
          },
          '&.Mui-focused.Mui-error': {
            color: theme.palette.warning.main,
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&:hover .MuiInputLabel-filled:not(.Mui-error)': {
            color: 'white',
            transition: 'color .2s',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: colors.primary['400'],
    },
    secondary: {
      main: colors.light['300'],
    },
    warning: {
      main: colors.warning['400'],
    },
    success: {
      main: colors.success['400'],
    },
    grey: colors.neutral,
  },
}
