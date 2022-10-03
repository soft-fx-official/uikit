import { createTheme, PaletteMode, Theme, ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import { getTheme as getMainTheme } from './main'

const themes: Readonly<Record<string, (mode?: PaletteMode) => ThemeOptions>> = {
  main: getMainTheme,
}

const init = (nameTheme: string, updateTheme: ThemeOptions): Theme =>
  createTheme(deepmerge(themes[nameTheme](updateTheme.palette?.mode), updateTheme))

export { init as initTheme }
export type { Theme }
