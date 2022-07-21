import { Theme, ThemeOptions } from '@mui/material';
import { main as themeMain, ITheme } from './main';
declare const init: (updateTheme: ThemeOptions) => Theme;
export default init;
export { themeMain };
export type { ITheme };
