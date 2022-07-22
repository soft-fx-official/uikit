declare module 'uikit/components/ButtonCard' {
import React from 'react';
import { BoxProps } from '@mui/material';
declare type ButtonCardProps = BoxProps;
declare const ButtonCard: React.FC<ButtonCardProps>;
export { ButtonCard };

};

declare module 'uikit/components/ButtonCardContainer' {
import React from 'react';
declare const ButtonCardContainer: React.FC<React.PropsWithChildren>;
export { ButtonCardContainer };

};

declare module 'uikit/components/CardContainer' {
import React from 'react';
declare const CardContainer: React.FC<React.PropsWithChildren>;
export default CardContainer;

};

declare module 'uikit/components/ErrorBoundary' {
import React from 'react';
interface IErrorBoundary {
    children: React.ReactElement;
}
declare class ErrorBoundary extends React.Component<IErrorBoundary> {
    constructor(props: IErrorBoundary);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): any;
}
export { ErrorBoundary };
export type { IErrorBoundary };

};

declare module 'uikit/components' {
import React from 'react';
import { BoxProps } from '@mui/material';
declare type ButtonCardProps = BoxProps;
declare const ButtonCard: React.FC<ButtonCardProps>;
export { ButtonCard };

import React from 'react';
declare const ButtonCardContainer: React.FC<React.PropsWithChildren>;
export { ButtonCardContainer };

import React from 'react';
declare const CardContainer: React.FC<React.PropsWithChildren>;
export default CardContainer;

import React from 'react';
interface IErrorBoundary {
    children: React.ReactElement;
}
declare class ErrorBoundary extends React.Component<IErrorBoundary> {
    constructor(props: IErrorBoundary);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): any;
}
export { ErrorBoundary };
export type { IErrorBoundary };

export { ButtonCard } from './ButtonCard';
export { ButtonCardContainer } from './ButtonCardContainer';
export type { IErrorBoundary } from './ErrorBoundary';
export { ErrorBoundary } from './ErrorBoundary';
export type { IModuleLoader } from './ModuleLoader';
export { ModuleLoader } from './ModuleLoader';
export { ThemeSwitch } from './ThemeSwitch';
export { Upload } from './Upload';

/// <reference types="common" />
import React from 'react';
import { IBus } from 'common/tools';
interface IModuleLoader {
    url: string;
    scope: string;
    module: string;
    bus: IBus | null;
    fallback: React.ReactElement | string | undefined;
}
declare const ModuleLoader: ({ url, scope, module, bus, fallback }: IModuleLoader) => JSX.Element;
export { ModuleLoader };
export type { IModuleLoader };

declare const ThemeSwitch: import("@emotion/styled").StyledComponent<import("@mui/material").SwitchProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export { ThemeSwitch };

/// <reference types="react" />
interface UploadProps {
    title?: string;
    description?: string;
    minFileSize?: number;
    maxFileSize?: number;
    acceptFormats?: string;
    onSelect: (file: File | null) => void;
}
declare const memoUpload: import("react").MemoExoticComponent<React.FC<UploadProps>>;
export { memoUpload as Upload };

};

declare module 'uikit/components/ModuleLoader' {
/// <reference types="common" />
import React from 'react';
import { IBus } from 'common/tools';
interface IModuleLoader {
    url: string;
    scope: string;
    module: string;
    bus: IBus | null;
    fallback: React.ReactElement | string | undefined;
}
declare const ModuleLoader: ({ url, scope, module, bus, fallback }: IModuleLoader) => JSX.Element;
export { ModuleLoader };
export type { IModuleLoader };

};

declare module 'uikit/components/ThemeSwitch' {
declare const ThemeSwitch: import("@emotion/styled").StyledComponent<import("@mui/material").SwitchProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export { ThemeSwitch };

};

declare module 'uikit/components/Upload' {
/// <reference types="react" />
interface UploadProps {
    title?: string;
    description?: string;
    minFileSize?: number;
    maxFileSize?: number;
    acceptFormats?: string;
    onSelect: (file: File | null) => void;
}
declare const memoUpload: import("react").MemoExoticComponent<React.FC<UploadProps>>;
export { memoUpload as Upload };

};

declare module 'uikit/themes' {
import { Theme, ThemeOptions } from '@mui/material';
import { ITheme, themeMain } from './main';
declare const init: (updateTheme: ThemeOptions) => Theme;
export { init as initTheme };
export { themeMain };
export type { ITheme };

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

};
