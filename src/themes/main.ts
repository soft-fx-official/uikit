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
        underline: 'always',
        variant: 'subtitle1',
        color: 'text.primary',
      },
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          transition: 'color .2s',
          textUnderlineOffset: '3px',
          textDecorationColor: theme.palette.text.primary,
          '&:hover': {
            color: theme.palette.text.secondary,
          },
        }),
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
            color: theme.palette.grey['400'],
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          color: theme.palette.grey['400'],
          '&.Mui-focused': {
            color: 'white',
          },
          '&.Mui-focused.Mui-error': {
            color: theme.palette.grey['400'],
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&:hover .MuiInputLabel-filled:not(.Mui-error)': {
            color: 'white',
          },
        },
      },
    },
    //Note: понижение z-index тултипа ошибки
    // MuiTooltip: {
    //   styleOverrides: {
    //     popper: {
    //       zIndex: 1300,
    //     },
    //   },
    // },
    //Note: повышение z-index дропдаунов
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          zIndex: 1501,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    //Note: Изменение отображение текста во всех элементах button
    button: {
      textTransform: 'capitalize',
    },
    h4: {
      fontWeight: 700,
      color: colors.light['100'],
    },
    subtitle1: {
      fontWeight: 400,
      color: colors.alpha['400'],
    },
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
    grey: colors.grey,
  },
}
