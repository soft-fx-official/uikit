import { Theme, ThemeOptions } from '@mui/material';
import { ITheme, main as themeMain } from './main';
declare const init: (updateTheme: ThemeOptions) => Theme;
export default init;
export { themeMain };
export type { ITheme };
