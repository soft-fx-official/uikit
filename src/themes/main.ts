/* eslint-disable max-lines */

import { PaletteMode, Theme, ThemeOptions } from '@mui/material'

import { colors } from './colors'

interface ITheme {
  theme: Theme
}

export const getTheme = (mode?: PaletteMode): ThemeOptions => {
  const isDarkMode = mode === 'dark'

  return {
    components: {
      MuiContainer: {
        styleOverrides: {
          root: ({ theme }: ITheme) => ({
            bgColor: isDarkMode ? colors.neutral['700'] : colors.light['100'],
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
            color: isDarkMode ? colors.light['100'] : colors.dark['600'],
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
            border: `1px solid ${theme.palette.secondary.main}`,
            transition: 'border-color .2s',
            '&:hover': {
              backgroundColor: 'inherit',
              border: `1px solid ${isDarkMode ? colors.light['100'] : colors.dark['400']}`,
            },
            '&.Mui-focused': {
              backgroundColor: 'inherit',
              border: `1px solid ${isDarkMode ? colors.light['100'] : colors.dark['400']}`,
            },
            '&.Mui-error': {
              border: `1px solid ${theme.palette.warning.main}`,
            },
            '&.MuiInputBase-colorSuccess': {
              borderColor: theme.palette.success.main,
            },
            '&.MuiButtonBase-root': {
              color: theme.palette.secondary.main,
            },
            '&.Mui-focused .MuiButtonBase-root': {
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
            },
            '&:hover .MuiButtonBase-root': {
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
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
              isDarkMode ? theme.palette.secondary.main : colors.neutral['700']
            }`,
            transition: 'border-color .2s',
            '&:hover': {
              backgroundColor: 'inherit',
              border: `1px solid ${isDarkMode ? colors.light['100'] : colors.neutral['500']}`,
            },
            '&.Mui-focused': {
              backgroundColor: 'inherit',
              border: `1px solid ${isDarkMode ? colors.light['100'] : colors.neutral['500']}`,
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
              color: `${isDarkMode ? colors.light['100'] : colors.neutral['500']}`,
            },
            '&:hover .MuiButtonBase-root': {
              color: `${isDarkMode ? colors.light['100'] : colors.neutral['500']}`,
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
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
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
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
            },
          }),
        },
      },
      //NOTE: понижение z-index тултипа ошибки
      MuiTooltip: {
        styleOverrides: {
          popper: {
            zIndex: 1300,
          },

          tooltip: ({ theme }: ITheme) => ({
            color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
          }),
        },
      },
      //NOTE: повышение z-index дропдаунов
      MuiAutocomplete: {
        styleOverrides: {
          popper: {
            zIndex: 1501,
          },

          root: ({ theme }: ITheme) => ({
            '& .MuiAutocomplete-paper': {
              border: `1px solid ${colors.alpha['500']}`,
              backgroundColor: colors.neutral['600'],
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
              color: theme.palette.secondary.main,
            },
            '&:hover .MuiInputLabel-root': {
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
            },
            '&:hover .MuiInputLabel-root.Mui-error': {
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
            },
            '& .MuiInputLabel-root.Mui-error': {
              color: theme.palette.secondary.main,
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
            },
            '& .MuiInputLabel-root.Mui-error.Mui-focused': {
              color: isDarkMode ? colors.light['100'] : colors.neutral['500'],
            },
          }),
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
              color: isDarkMode ? colors.light['100'] : colors.dark['600'],
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
              color: isDarkMode ? colors.alpha['600'] : colors.dark['400'],
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
        main: isDarkMode ? colors.light['300'] : colors.dark['400'],
      },
      warning: {
        main: colors.warning['400'],
        // @ts-ignore
        secondary: colors.warning['600'],
      },
      success: {
        main: colors.success['400'],
      },
      grey: colors.neutral,
      background: isDarkMode
        ? {
            // @ts-ignore
            secondary: colors.neutral['600'],

            default: colors.neutral['700'],
            paper: colors.neutral['600'],
          }
        : {
            default: colors.light['100'],
            paper: colors.light['100'],
          },
      // neutral: colors.neutral,
      text: isDarkMode
        ? {
            primary: colors.light['100'],
            secondary: colors.light['300'],

            // @ts-ignore // todo remove
            dark: colors.light['600'],
            // @ts-ignore
            light: colors.light['200'],
            // @ts-ignore
            white: colors.light['100'],
          }
        : {
            primary: colors.dark['600'],
            secondary: colors.neutral['500'],
          },
    },
  }
}
