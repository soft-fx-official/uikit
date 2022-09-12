/* eslint-disable max-lines */

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
          bgColor: theme.palette.mode === 'dark' ? theme.palette.grey['700'] : 'white',
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'always',
        variant: 'subtitle1',
        // color: 'text.primary',
      },
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          transition: 'color .2s',
          textUnderlineOffset: '3px',
          textDecorationColor: theme.palette.text.primary,
          color: '#fff',
          '&:hover': {
            color: theme.palette.text.secondary,
          },
        }),
      },
    },
    MuiButton: {
      //NOTE: Изменение отображение текста во всех элементах button
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          textTransform: 'capitalize',
          fontSize: 18,
          lineHeight: '22px',
          boxShadow: 'none',
          backgroundColor: colors.primary['500'],
          borderRadius: '8px',
          height: '54px',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: colors.primary['600'],
          },
          [theme.breakpoints.down('lg')]: {
            fontSize: 16,
            lineHeight: '19px',
          },
        }),
      },
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
          border: `1px solid ${
            theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey['500']
          }`,
          transition: 'border-color .2s',
          '&:hover': {
            backgroundColor: 'inherit',
            border: `1px solid ${
              theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']
            }`,
          },
          '&.Mui-focused': {
            backgroundColor: 'inherit',
            border: `1px solid ${
              theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']
            }`,
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
            color: `${theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']}`,
          },
          '&:hover .MuiButtonBase-root': {
            color: `${theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']}`,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          backgroundColor: 'inherit',
          borderRadius: '6px',
          border: `1px solid ${
            theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey['700']
          }`,

          transition: 'border-color .2s',
          '&:hover': {
            backgroundColor: 'inherit',
            border: `1px solid ${
              theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']
            }`,
          },
          '&.Mui-focused': {
            backgroundColor: 'inherit',
            border: `1px solid ${
              theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']
            }`,
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
            color: `${theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']}`,
          },
          '&:hover .MuiButtonBase-root': {
            color: `${theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']}`,
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
            color: `${theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']}`,
          },
          '&.Mui-focused.Mui-error': {
            color: theme.palette.warning.main,
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }: ITheme) => ({
          '&:hover .MuiInputLabel-filled:not(.Mui-error)': {
            color: `${theme.palette.mode === 'dark' ? 'white' : theme.palette.grey['500']}`,
          },
        }),
      },
    },
    //NOTE: понижение z-index тултипа ошибки
    // MuiTooltip: {
    //   styleOverrides: {
    //     popper: {
    //       zIndex: 1300,
    //     },
    //   },
    // },
    //NOTE: повышение z-index дропдаунов
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          zIndex: 1501,
        },
      },
    },
    //NOTE: измениене стилей заголовков и подщаголовков, ссфлок
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h4' },
          style: ({ theme }: ITheme) => ({
            fontWeight: 700,
            fontSize: 26,
            lineHeight: '36px',
            color: `${
              theme.palette.mode === 'dark' ? colors.light['100'] : theme.palette.grey['500']
            }`,
            [theme.breakpoints.down('lg')]: {
              fontSize: 22,
              lineHeight: '30px',
            },
          }),
        },
        {
          props: { variant: 'subtitle1' },
          style: ({ theme }: ITheme) => ({
            fontSize: 18,
            lineHeight: '21px',
            color: `${
              theme.palette.mode === 'dark' ? colors.alpha['600'] : theme.palette.grey['500']
            }`,
            [theme.breakpoints.down('lg')]: {
              fontSize: 14,
              lineHeight: '22px',
            },
          }),
        },
      ],
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
    background: {
      // @ts-ignore
      secondary: colors.neutral['600'],
      default: '#121418',
      paper: '#16191E',
    },
    neutral: colors.neutral,
    text: {
      secondary: colors.light['300'],
      // @ts-ignore
      dark: colors.light['600'],
      // @ts-ignore
      light: colors.light['200'],
      // @ts-ignore
      white: colors.light['100'],
    },
  },
}
