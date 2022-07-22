import { createTheme, Theme, ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import { ITheme, themeMain } from './main'

const init = (updateTheme: ThemeOptions): Theme =>
  createTheme(deepmerge(themeMain as ThemeOptions, updateTheme))

export { init as initTheme }
export { themeMain }
export type { ITheme }
