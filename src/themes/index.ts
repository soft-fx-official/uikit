import { createTheme, Theme, ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'

import { ITheme, main as themeMain } from './main'

const init = (updateTheme: ThemeOptions): Theme =>
  createTheme(deepmerge(themeMain as ThemeOptions, updateTheme))

export default init
export { themeMain }
export type { ITheme }
