/* eslint-disable max-lines */

import { PaletteMode, Theme, ThemeOptions } from '@mui/material'
import { PaletteOptions } from '@mui/material/styles/createPalette'

import { CustromPopperAutocomplete } from '../components/CustomPopperAutocomplete'
import { colors } from './colors'

type TCard = {
  color?: string
  border?: string
  background?: string
  hover: {
    color?: string
    border?: string
    background?: string
  }
  disabled: {
    color?: string
    border?: string
    background?: string
  }
}

type TInput = {
  primary?: string
}

type TPaletteBase = {
  primary?: string
  secondary?: string
}

type TDocumentPlaceholder = TPaletteBase

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    border?: {
      neutral: string
    }
    card?: TCard
    input?: TInput
    document?: TDocumentPlaceholder
  }

  export interface PaletteOptions {
    border?: {
      neutral: string
    }
    card?: TCard
    input?: TInput
    document?: TDocumentPlaceholder
    icon?: TPaletteBase
    progress?: TPaletteBase
  }

  export interface SimplePaletteColorOptions {
    secondary?: string
    alternative?: string
  }

  export interface TypeBackground {
    root: string
    sumsub: string
  }

  export interface TypeText {
    dark?: string
    light?: string
    white?: string
  }
}

interface ITheme {
  theme: Theme
}

const DARK_PALETTE: PaletteOptions = {
  primary: {
    main: colors.primary['400'],
  },
  secondary: {
    main: colors.light['300'],
    alternative: colors.alpha['600'],
  },
  warning: {
    main: colors.warning['400'],
    secondary: colors.warning['600'],
  },
  success: {
    main: colors.success['400'],
  },
  grey: colors.neutral,
  background: {
    default: colors.neutral['700'],
    paper: colors.neutral['600'],
    root: colors.neutral['700'],
    sumsub: '#0E0D13',
  },
  text: {
    primary: colors.light['100'],
    secondary: colors.light['300'],
    dark: colors.light['600'],
    light: colors.light['200'],
    white: colors.light['100'],
  },
  border: {
    neutral: colors.alpha['500'],
  },
  card: {
    color: colors.light['100'],
    border: colors.neutral['300'],
    background: colors.neutral['600'],
    hover: {
      border: colors.light['100'],
      background: colors.dark['A200'],
    },
    disabled: {
      color: colors.light['100'],
      border: colors.neutral['300'],
      background: colors.neutral['600'],
    },
  },
  input: {
    primary: colors.light['100'],
  },
  document: {
    primary: colors.neutral['600'],
    secondary: colors.dark['A300'],
  },
  icon: {
    primary: colors.light['300'],
    secondary: colors.dark['A300'],
  },
  progress: {
    primary: colors.neutral['400'],
    secondary: colors.dark['A200'],
  },
}

const LIGHT_PALETTE: Partial<PaletteOptions> = {
  secondary: {
    main: colors.dark['400'],
    alternative: colors.dark['300'],
  },
  background: {
    root: colors.light['100'],
    default: colors.light['100'],
    paper: colors.light['100'],
    sumsub: colors.light['100'],
  },
  text: {
    primary: colors.dark['600'],
    secondary: colors.neutral['500'],
    dark: colors.light['600'],
    light: colors.light['200'],
    white: colors.light['100'],
  },
  border: {
    neutral: colors.dark['400'],
  },
  card: {
    color: colors.dark['500'],
    border: colors.dark['50'],
    background: colors.light['A300'],
    hover: {
      border: colors.success['400'],
      background: colors.success['A200'],
    },
    disabled: {
      color: colors.dark['400'],
      border: colors.dark['100'],
      background: colors.light['100'],
    },
  },
  input: {
    primary: colors.neutral['500'],
  },
  document: {
    primary: colors.light['A300'],
    secondary: colors.light['A100'],
  },
  icon: {
    primary: colors.light['A100'],
    secondary: colors.light['A300'],
  },
  progress: {
    primary: colors.light['A200'],
    secondary: colors.light['A300'],
  },
}

export const getTheme = (mode?: PaletteMode): ThemeOptions => {
  const isDarkMode = mode === 'dark'

  const palette = isDarkMode ? DARK_PALETTE : { ...DARK_PALETTE, ...LIGHT_PALETTE }

  return {
    components: {
      MuiContainer: {
        styleOverrides: {
          root: ({ theme }: ITheme) => ({
            bgColor: theme.palette.background.root,
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
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.text.secondary,
            },
          }),
        },
      },
      MuiButton: {
        //NOTE: ?????????????????? ?????????????????????? ???????????? ???? ???????? ?????????????????? button
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
              border: `1px solid ${theme.palette.input?.primary}`,
            },
            '&.Mui-focused': {
              backgroundColor: 'inherit',
              border: `1px solid ${theme.palette.input?.primary}`,
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
              color: theme.palette.input?.primary,
            },
            '&:hover .MuiButtonBase-root': {
              color: theme.palette.input?.primary,
            },
          }),
          input: ({ theme }: ITheme) => ({
            '&:-webkit-autofill': {
              WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.default} inset`,
              borderRadius: 'inherit',
            },
            '&:-webkit-autofill:not(:last-child)': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }),
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&.MuiToggleButtonGroup-root': {
              gap: theme.spacing(1),
              '& .MuiToggleButtonGroup-grouped': {
                '&:not(:first-of-type)': {
                  borderLeftColor: theme.palette.card?.border,
                  borderRadius: theme.shape.borderRadius,
                },
                '&:first-of-type': {
                  borderRadius: theme.shape.borderRadius,
                },
              },
              '& .MuiButtonBase-root': {
                color: theme.palette.card?.color,
                backgroundColor: theme.palette.card?.background,
                borderColor: theme.palette.card?.border,
                transition: 'background-color .2s, border-color .2s, opacity .2s',
              },
              '& .MuiButtonBase-root:hover': {
                borderColor: theme.palette.card?.hover.border,
                backgroundColor: theme.palette.card?.hover.background,
              },
              '& .MuiButtonBase-root.Mui-selected': {
                color: theme.palette.card?.color,
                borderColor: theme.palette.success.main,
                backgroundColor: isDarkMode
                  ? colors.green['700']
                  : theme.palette.card?.hover.background,
              },
              '& .MuiButtonBase-root.Mui-disabled': {
                opacity: '.5',
                color: theme.palette.card?.disabled.color,
                borderColor: theme.palette.card?.disabled.border,
                backgroundColor: theme.palette.card?.disabled.background,
              },
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
              border: `1px solid ${theme.palette.input?.primary}`,
            },
            '&.Mui-focused': {
              backgroundColor: 'inherit',
              border: `1px solid ${theme.palette.input?.primary}`,
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
              color: theme.palette.input?.primary,
            },
            '&:hover .MuiButtonBase-root': {
              color: theme.palette.input?.primary,
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
              color: theme.palette.input?.primary,
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
              color: theme.palette.input?.primary,
            },
          }),
        },
      },
      //NOTE: ?????????????????? z-index ?????????????? ????????????
      MuiTooltip: {
        styleOverrides: {
          popper: {
            zIndex: 1300,
          },

          tooltip: ({ theme }: ITheme) => ({
            color: theme.palette.input?.primary,
          }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: theme => ({
          // ?????? webkit-??????????????????
          '&::-webkit-scrollbar': {
            border: 'none',
          },
          '&::-webkit-scrollbar-track': {
            margin: 3,
            border: `7px solid ${colors.alpha['0']}`,
            boxShadow: `inset 0 0 0 3px ${isDarkMode ? colors.alpha['500'] : colors.dark['100']}`,
          },
          '&::-webkit-scrollbar-thumb': {
            transition: '.3s',
            borderRadius: 12,
            border: `7px solid ${colors.alpha['0']}`,
            boxShadow: `inset 0 0 0 3px ${isDarkMode ? colors.alpha['600'] : colors.dark['400']}`,
            backgroundColor: colors.alpha['0'],
            height: 43,
          },
          // ?????? firefox
          '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: isDarkMode ? colors.alpha['500'] : colors.dark['100'],
          },
        }),
      },
      //NOTE: ?????????????????? z-index ????????????????????
      MuiAutocomplete: {
        defaultProps: {
          PopperComponent: CustromPopperAutocomplete,
        },
        styleOverrides: {
          popper: ({ theme }: ITheme) => ({
            zIndex: 1501,
            '& .MuiAutocomplete-paper': {
              border: `1px solid`,
              borderColor: theme.palette.border?.neutral,
              backgroundColor: theme.palette.background.paper,
              borderRadius: '8px',
            },
          }),

          root: ({ theme }: ITheme) => ({
            '& .MuiInputLabel-root': {
              color: theme.palette.secondary.main,
            },
            '& .MuiInputLabel-root.Mui-error': {
              color: theme.palette.secondary.main,
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: theme.palette.secondary.main,
            },
            '&:hover .MuiInputLabel-root': {
              color: theme.palette.input?.primary,
            },
            '&:hover .MuiInputLabel-root.Mui-error': {
              color: theme.palette.input?.primary,
            },
            '&.Mui-focused .MuiInputLabel-root.Mui-focused': {
              color: theme.palette.input?.primary,
            },
            '& .MuiInputLabel-root.Mui-error.Mui-focused': {
              color: theme.palette.input?.primary,
            },
          }),
        },
      },
      //NOTE: ?????????????????? ???????????? ???????????????????? ?? ??????????????????????????, ????????????
      MuiTypography: {
        variants: [
          {
            props: { variant: 'h4' },
            style: ({ theme }: ITheme) => ({
              fontWeight: 700,
              fontSize: 26,
              lineHeight: '36px',
              color: theme.palette.text.primary,
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
    palette: palette,
  }
}
