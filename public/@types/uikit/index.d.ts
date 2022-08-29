declare module 'uikit/components/ButtonCard' {
import React from 'react';
import { BoxProps } from '@mui/material';
declare type ButtonCardProps = BoxProps;
declare const ButtonCard: React.FC<ButtonCardProps>;
export { ButtonCard };

};

declare module 'uikit/components/ButtonCardContainer' {
import React from 'react';
interface IButtonCardContainer {
    children: any;
    sx?: any;
}
declare const ButtonCardContainer: React.FC<IButtonCardContainer>;
export { ButtonCardContainer };

};

declare module 'uikit/components/ButtonLoader' {
/// <reference types="react" />
interface IButtonLoader {
    isLoad: boolean;
    label: string;
    buttonProps?: any;
}
declare const ButtonLoader: ({ isLoad, label, buttonProps }: IButtonLoader) => JSX.Element;
export { ButtonLoader };

};

declare module 'uikit/components/CustomTooltip' {
import React from 'react';
import { TooltipProps } from '@mui/material';
declare type CustomTooltipProps = Pick<TooltipProps, 'children' | 'title' | 'open' | 'arrow' | 'placement'> & {
    color?: 'warning' | 'success' | 'default';
    timeout?: number;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export { CustomTooltip };

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

declare module 'uikit/components/Icons' {
export { default as AddPlusIcon } from '../../icons/AddPlusIcon';
export { default as AndroidIcon } from '../../icons/AndroidIcon';
export { default as ArchitectureIcon } from '../../icons/ArchitectureIcon';
export { default as ArtIcon } from '../../icons/ArtIcon';
export { default as BankStatementIcon } from '../../icons/BankStatementIcon';
export { default as BusinessIcon } from '../../icons/BusinessIcon';
export { default as CancelModalIcon } from '../../icons/CancelModalIcon';
export { default as CertificateGoodIcon } from '../../icons/CertificateGoodIcon';
export { default as CertificateIncorporationIcon } from '../../icons/CertificateIncorporationIcon';
export { default as ComputerServicesIcon } from '../../icons/ComputerServicesIcon';
export { default as CorporateAccountIcon } from '../../icons/CorporateAccountIcon';
export { default as DrivingLicenseIcon } from '../../icons/DrivingLicenseIcon';
export { default as EmployedIcon } from '../../icons/EmployedIcon';
export { default as ErrorIcon } from '../../icons/ErrorIcon';
export { default as FinanceLawIcon } from '../../icons/FinanceLawIcon';
export { default as HealthcareIcon } from '../../icons/HealthcareIcon';
export { default as HedgingIcon } from '../../icons/HedgingIcon';
export { default as IOSIcon } from '../../icons/IOSIcon';
export { default as LockIcon } from '../../icons/LockIcon';
export { default as MemorandumAssociationIcon } from '../../icons/MemorandumAssociationIcon';
export { default as NationalIdCardIcon } from '../../icons/NationalIdCardIcon';
export { default as PassportIcon } from '../../icons/PassportIcon';
export { default as PDFIcon } from '../../icons/PDFIcon';
export { default as PersonalAccountIcon } from '../../icons/PersonalAccountIcon';
export { default as PowerAttorneyIcon } from '../../icons/PowerAttorneyIcon';
export { default as PrintIcon } from '../../icons/PrintIcon';
export { default as RetiredIcon } from '../../icons/RetiredIcon';
export { default as SalesMarketingIcon } from '../../icons/SalesMarketingIcon';
export { default as ScienceIcon } from '../../icons/ScienceIcon';
export { default as SpeculationIcon } from '../../icons/SpeculationIcon';
export { default as StandingIcon } from '../../icons/StandingIcon';
export { default as UnemployedIcon } from '../../icons/UnemployedIcon';
export { default as UtilityBillIcon } from '../../icons/UtilityBillIcon';
export { default as WindowsIcon } from '../../icons/WindowsIcon';

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
/// <reference types="react" />
interface IThemeSwitch {
    isDarkTheme: boolean;
    onChange: () => void;
}
declare const ThemeSwitch: ({ isDarkTheme, onChange }: IThemeSwitch) => JSX.Element;
export { ThemeSwitch };

};

declare module 'uikit/components/Upload' {
/// <reference types="react" />
export declare enum UploadDocumentType {
    idCard = "idCard",
    certificate = "certificate",
    passport = "passport"
}
interface UploadProps {
    title?: string;
    description?: string;
    minFileSize?: number;
    maxFileSize?: number;
    documentType?: UploadDocumentType;
    acceptFormats?: string;
    onSelect: (file: File | null) => void;
    customError?: string;
    onError?: (errCode: string) => string;
}
declare const memoUpload: import("react").MemoExoticComponent<React.FC<UploadProps>>;
export { memoUpload as Upload };

};

declare module 'uikit/components' {
import React from 'react';
import { BoxProps } from '@mui/material';
declare type ButtonCardProps = BoxProps;
declare const ButtonCard: React.FC<ButtonCardProps>;
export { ButtonCard };

import React from 'react';
interface IButtonCardContainer {
    children: any;
    sx?: any;
}
declare const ButtonCardContainer: React.FC<IButtonCardContainer>;
export { ButtonCardContainer };

/// <reference types="react" />
interface IButtonLoader {
    isLoad: boolean;
    label: string;
    buttonProps?: any;
}
declare const ButtonLoader: ({ isLoad, label, buttonProps }: IButtonLoader) => JSX.Element;
export { ButtonLoader };

import React from 'react';
import { TooltipProps } from '@mui/material';
declare type CustomTooltipProps = Pick<TooltipProps, 'children' | 'title' | 'open' | 'arrow' | 'placement'> & {
    color?: 'warning' | 'success' | 'default';
    timeout?: number;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export { CustomTooltip };

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

export { default as AddPlusIcon } from '../../icons/AddPlusIcon';
export { default as AndroidIcon } from '../../icons/AndroidIcon';
export { default as ArchitectureIcon } from '../../icons/ArchitectureIcon';
export { default as ArtIcon } from '../../icons/ArtIcon';
export { default as BankStatementIcon } from '../../icons/BankStatementIcon';
export { default as BusinessIcon } from '../../icons/BusinessIcon';
export { default as CancelModalIcon } from '../../icons/CancelModalIcon';
export { default as CertificateGoodIcon } from '../../icons/CertificateGoodIcon';
export { default as CertificateIncorporationIcon } from '../../icons/CertificateIncorporationIcon';
export { default as ComputerServicesIcon } from '../../icons/ComputerServicesIcon';
export { default as CorporateAccountIcon } from '../../icons/CorporateAccountIcon';
export { default as DrivingLicenseIcon } from '../../icons/DrivingLicenseIcon';
export { default as EmployedIcon } from '../../icons/EmployedIcon';
export { default as ErrorIcon } from '../../icons/ErrorIcon';
export { default as FinanceLawIcon } from '../../icons/FinanceLawIcon';
export { default as HealthcareIcon } from '../../icons/HealthcareIcon';
export { default as HedgingIcon } from '../../icons/HedgingIcon';
export { default as IOSIcon } from '../../icons/IOSIcon';
export { default as LockIcon } from '../../icons/LockIcon';
export { default as MemorandumAssociationIcon } from '../../icons/MemorandumAssociationIcon';
export { default as NationalIdCardIcon } from '../../icons/NationalIdCardIcon';
export { default as PassportIcon } from '../../icons/PassportIcon';
export { default as PDFIcon } from '../../icons/PDFIcon';
export { default as PersonalAccountIcon } from '../../icons/PersonalAccountIcon';
export { default as PowerAttorneyIcon } from '../../icons/PowerAttorneyIcon';
export { default as PrintIcon } from '../../icons/PrintIcon';
export { default as RetiredIcon } from '../../icons/RetiredIcon';
export { default as SalesMarketingIcon } from '../../icons/SalesMarketingIcon';
export { default as ScienceIcon } from '../../icons/ScienceIcon';
export { default as SpeculationIcon } from '../../icons/SpeculationIcon';
export { default as StandingIcon } from '../../icons/StandingIcon';
export { default as UnemployedIcon } from '../../icons/UnemployedIcon';
export { default as UtilityBillIcon } from '../../icons/UtilityBillIcon';
export { default as WindowsIcon } from '../../icons/WindowsIcon';

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

/// <reference types="react" />
interface IThemeSwitch {
    isDarkTheme: boolean;
    onChange: () => void;
}
declare const ThemeSwitch: ({ isDarkTheme, onChange }: IThemeSwitch) => JSX.Element;
export { ThemeSwitch };

/// <reference types="react" />
export declare enum UploadDocumentType {
    idCard = "idCard",
    certificate = "certificate",
    passport = "passport"
}
interface UploadProps {
    title?: string;
    description?: string;
    minFileSize?: number;
    maxFileSize?: number;
    documentType?: UploadDocumentType;
    acceptFormats?: string;
    onSelect: (file: File | null) => void;
    customError?: string;
    onError?: (errCode: string) => string;
}
declare const memoUpload: import("react").MemoExoticComponent<React.FC<UploadProps>>;
export { memoUpload as Upload };

export { ButtonCard } from './ButtonCard';
export { ButtonCardContainer } from './ButtonCardContainer';
export { ButtonLoader } from './ButtonLoader';
export { CustomTooltip } from './CustomTooltip';
export type { IErrorBoundary } from './ErrorBoundary';
export { ErrorBoundary } from './ErrorBoundary';
export type { IModuleLoader } from './ModuleLoader';
export { ModuleLoader } from './ModuleLoader';
export { ThemeSwitch } from './ThemeSwitch';
export { Upload } from './Upload';

};

declare module 'uikit/icons/AddPlusIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/AndroidIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/ArchitectureIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/ArtIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/BankStatementIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/BusinessIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/CancelModalIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/CertificateGoodIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/CertificateIncorporationIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/ComputerServicesIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/CorporateAccountIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/DrivingLicenseIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/EmployedIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/ErrorIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/FinanceLawIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/HealthcareIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/HedgingIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/IOSIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/LeftArrowMobilMode' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/LockIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/MemorandumAssociationIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/NationalIdCardIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/PDFIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/PassportIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/PersonalAccountIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/PowerAttorneyIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/PrintIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/RetiredIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/SalesMarketingIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/ScienceIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/SpeculationIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/StandingIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/UnemployedIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/UtilityBillIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/WindowsIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

export { default as AddPlusIcon } from './AddPlusIcon';
export { default as AndroidIcon } from './AndroidIcon';
export { default as ArchitectureIcon } from './ArchitectureIcon';
export { default as ArtIcon } from './ArtIcon';
export { default as BankStatementIcon } from './BankStatementIcon';
export { default as BusinessIcon } from './BusinessIcon';
export { default as CancelModalIcon } from './CancelModalIcon';
export { default as CertificateGoodIcon } from './CertificateGoodIcon';
export { default as CertificateIncorporationIcon } from './CertificateIncorporationIcon';
export { default as ComputerServicesIcon } from './ComputerServicesIcon';
export { default as CorporateAccountIcon } from './CorporateAccountIcon';
export { default as DrivingLicenseIcon } from './DrivingLicenseIcon';
export { default as EmployedIcon } from './EmployedIcon';
export { default as ErrorIcon } from './ErrorIcon';
export { default as FinanceLawIcon } from './FinanceLawIcon';
export { default as HealthcareIcon } from './HealthcareIcon';
export { default as HedgingIcon } from './HedgingIcon';
export { default as IOSIcon } from './IOSIcon';
export { default as LeftArrow } from './LeftArrowMobilMode';
export { default as LockIcon } from './LockIcon';
export { default as MemorandumAssociationIcon } from './MemorandumAssociationIcon';
export { default as NationalIdCardIcon } from './NationalIdCardIcon';
export { default as PassportIcon } from './PassportIcon';
export { default as PDFIcon } from './PDFIcon';
export { default as PersonalAccountIcon } from './PersonalAccountIcon';
export { default as PowerAttorneyIcon } from './PowerAttorneyIcon';
export { default as PrintIcon } from './PrintIcon';
export { default as RetiredIcon } from './RetiredIcon';
export { default as SalesMarketingIcon } from './SalesMarketingIcon';
export { default as ScienceIcon } from './ScienceIcon';
export { default as SpeculationIcon } from './SpeculationIcon';
export { default as StandingIcon } from './StandingIcon';
export { default as UnemployedIcon } from './UnemployedIcon';
export { default as UtilityBillIcon } from './UtilityBillIcon';
export { default as WindowsIcon } from './WindowsIcon';

};

declare module 'uikit/themes' {
declare const colors: {
    neutral: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
    light: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
    };
    dark: {
        100: string;
        200: string;
        300: string;
        400: string;
    };
    primary: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
    success: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
    };
    error: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
    warning: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
    };
    red: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
    };
    green: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
    alpha: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
};
export { colors };

import { Theme, ThemeOptions } from '@mui/material';
declare const init: (nameTheme: string, updateTheme: ThemeOptions) => Theme;
export { init as initTheme };
export type { Theme };

import { ThemeOptions } from '@mui/material';
export declare const theme: ThemeOptions;

};
