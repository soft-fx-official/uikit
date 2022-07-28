import { Theme } from '@mui/material';
interface ITheme {
    theme: Theme;
}
declare const themeMain: {
    components: {
        MuiContainer: {
            styleOverrides: {
                root: ({ theme }: ITheme) => {
                    bgColor: string;
                };
            };
        };
        MuiLink: {
            defaultProps: {
                underline: string;
                variant: string;
                color: string;
            };
        };
        MuiButton: {
            defaultProps: {
                size: string;
            };
        };
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: boolean;
            };
            styleOverrides: {
                root: ({ theme }: ITheme) => {
                    backgroundColor: string;
                    borderRadius: string;
                    border: string;
                    transition: string;
                    '&:hover': {
                        backgroundColor: string;
                        border: string;
                    };
                    '&.Mui-focused': {
                        backgroundColor: string;
                        border: string;
                    };
                    '&.Mui-error': {
                        border: string;
                    };
                    '&.MuiInputBase-colorSuccess': {
                        borderColor: string;
                    };
                    '& .MuiButtonBase-root': {
                        color: string;
                    };
                    '&.Mui-focused .MuiButtonBase-root': {
                        color: string;
                    };
                    '&:hover .MuiButtonBase-root': {
                        color: string;
                        transition: string;
                    };
                };
            };
        };
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }: ITheme) => {
                    backgroundColor: string;
                    borderRadius: string;
                    border: string;
                    transition: string;
                    '&:hover': {
                        backgroundColor: string;
                        border: string;
                    };
                    '&.Mui-focused': {
                        backgroundColor: string;
                        border: string;
                    };
                    '&.Mui-error': {
                        border: string;
                    };
                    '&.MuiInputBase-colorSuccess': {
                        borderColor: string;
                    };
                    '& .MuiButtonBase-root': {
                        color: string;
                    };
                    '&.Mui-focused .MuiButtonBase-root': {
                        color: string;
                    };
                    '&:hover .MuiButtonBase-root': {
                        color: string;
                        transition: string;
                    };
                    '.MuiOutlinedInput-notchedOutline': {
                        border: string;
                    };
                };
            };
        };
        MuiFormLabel: {
            styleOverrides: {
                root: ({ theme }: ITheme) => {
                    color: string;
                    '&.Mui-error': {
                        color: string;
                    };
                };
            };
        };
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }: ITheme) => {
                    '&.Mui-focused': {
                        color: string;
                    };
                    '&.Mui-focused.Mui-error': {
                        color: string;
                    };
                };
            };
        };
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '&:hover .MuiInputLabel-filled:not(.Mui-error)': {
                        color: string;
                        transition: string;
                    };
                };
            };
        };
    };
    typography: {
        fontFamily: string;
    };
    palette: {
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        success: {
            main: string;
        };
        grey: {
            main: string;
            light: string;
        };
    };
};
export { themeMain };
export type { ITheme };
