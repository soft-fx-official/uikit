import { Theme, ThemeOptions } from '@mui/material';
import { ITheme, themeMain } from './main';
declare const init: (updateTheme: ThemeOptions) => Theme;
export { init as initTheme };
export { themeMain };
export type { ITheme };
