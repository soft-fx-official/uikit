import { createTheme, Theme, ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

// NOTE: Remote load theme from config
import theme from './main'

const init = (updateTheme: ThemeOptions): Theme =>
  createTheme(deepmerge(theme as ThemeOptions, updateTheme))

export default init
