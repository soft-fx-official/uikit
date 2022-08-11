import { createTheme, Theme, ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import { theme as themeMain } from './main'

interface IThemes {
  [name: string]: ThemeOptions
}

const themes: IThemes = {
  main: themeMain,
}

const init = (nameTheme: string, updateTheme: ThemeOptions): Theme =>
  createTheme(deepmerge(themes[nameTheme] as ThemeOptions, updateTheme))

export { init as initTheme }
export type { Theme }
