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

declare module 'uikit/components/CustomPopperAutocomplete' {
/// <reference types="react" />
import { PopperProps } from '@mui/material';
export declare const CustromPopperAutocomplete: ({ children, ...rest }: PopperProps) => JSX.Element;

};

declare module 'uikit/components/CustomSelect' {
/// <reference types="react" />
interface CustomSelectProps {
    data: any;
    options: Array<any>;
    onChange: Function;
    variant: 'standard' | 'outlined' | 'filled';
    optionTemplate: (props: any) => any;
    label: string | null;
    onFocus?: () => any;
    onBlur?: () => any;
    placeholder: string;
    inputProps: (props: any) => object | void;
    name: string;
    modalProps: {
        style?: object;
        placeholder: string;
        title: string;
    };
}
declare const CustomSelect: ({ data, options, onChange, variant, optionTemplate, label, name, placeholder, onBlur, onFocus, inputProps, modalProps, }: CustomSelectProps) => JSX.Element;
export { CustomSelect };

};

declare module 'uikit/components/CustomSelectCountries' {
import React from 'react';
import { TFunction } from 'react-i18next';
declare type CustomSelectCountriesProps = {
    form: any;
    countries: Array<object>;
    t: TFunction<'', undefined>;
};
declare const CustomSelectCountries: React.FC<CustomSelectCountriesProps>;
export { CustomSelectCountries };

};

declare module 'uikit/components/CustomTooltip' {
import React from 'react';
import { TooltipProps } from '@mui/material';
declare type CustomTooltipProps = Pick<TooltipProps, 'children' | 'title' | 'open' | 'arrow' | 'placement'> & {
    color?: 'warning' | 'success' | 'default';
    timeout?: number;
    arrowBottomOffset?: number;
    fallbackPlacements?: ('bottom-end' | 'bottom-start' | 'bottom')[];
    onClose?: () => void;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export { CustomTooltip };

};

declare module 'uikit/components/ErrorBoundary' {
import React from 'react';
interface IErrorBoundary {
    children: React.ReactElement;
    onError: (error: any) => void;
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

declare module 'uikit/components/Failed' {
/// <reference types="react" />
interface IFailed {
    title: string;
}
declare const Failed: ({ title }: IFailed) => JSX.Element;
export { Failed };
export type { IFailed };

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

/// <reference types="react" />
import { PopperProps } from '@mui/material';
export declare const CustromPopperAutocomplete: ({ children, ...rest }: PopperProps) => JSX.Element;

/// <reference types="react" />
interface CustomSelectProps {
    data: any;
    options: Array<any>;
    onChange: Function;
    variant: 'standard' | 'outlined' | 'filled';
    optionTemplate: (props: any) => any;
    label: string | null;
    onFocus?: () => any;
    onBlur?: () => any;
    placeholder: string;
    inputProps: (props: any) => object | void;
    name: string;
    modalProps: {
        style?: object;
        placeholder: string;
        title: string;
    };
}
declare const CustomSelect: ({ data, options, onChange, variant, optionTemplate, label, name, placeholder, onBlur, onFocus, inputProps, modalProps, }: CustomSelectProps) => JSX.Element;
export { CustomSelect };

import React from 'react';
import { TFunction } from 'react-i18next';
declare type CustomSelectCountriesProps = {
    form: any;
    countries: Array<object>;
    t: TFunction<'', undefined>;
};
declare const CustomSelectCountries: React.FC<CustomSelectCountriesProps>;
export { CustomSelectCountries };

import React from 'react';
import { TooltipProps } from '@mui/material';
declare type CustomTooltipProps = Pick<TooltipProps, 'children' | 'title' | 'open' | 'arrow' | 'placement'> & {
    color?: 'warning' | 'success' | 'default';
    timeout?: number;
    arrowBottomOffset?: number;
    fallbackPlacements?: ('bottom-end' | 'bottom-start' | 'bottom')[];
    onClose?: () => void;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export { CustomTooltip };

import React from 'react';
interface IErrorBoundary {
    children: React.ReactElement;
    onError: (error: any) => void;
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

/// <reference types="react" />
interface IFailed {
    title: string;
}
declare const Failed: ({ title }: IFailed) => JSX.Element;
export { Failed };
export type { IFailed };

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

export { ButtonCard } from './ButtonCard';
export { ButtonCardContainer } from './ButtonCardContainer';
export { ButtonLoader } from './ButtonLoader';
export { CustomSelect } from './CustomSelect';
export { CustomSelectCountries } from './CustomSelectCountries';
export { CustomTooltip } from './CustomTooltip';
export type { IErrorBoundary } from './ErrorBoundary';
export { ErrorBoundary } from './ErrorBoundary';
export type { IFailed } from './Failed';
export { Failed } from './Failed';
export type { ILoader } from './Loader';
export { Loader } from './Loader';
export type { IModuleLoader } from './ModuleLoader';
export { ModuleLoader } from './ModuleLoader';
export { ThemeSwitch } from './ThemeSwitch';
export { Upload } from './Upload';

/// <reference types="react" />
interface ILoader {
    style?: object;
    isStop?: boolean;
}
declare const Loader: ({ style, isStop }: ILoader) => JSX.Element;
export { Loader };
export type { ILoader };

/// <reference types="common" />
import React from 'react';
import { IBus } from 'common/tools';
interface IModuleLoader {
    url: string;
    scope: string;
    module: string;
    bus: IBus | null;
    onError: (error: any) => void;
    onLoad: () => void;
    onDone: () => void;
}
declare const ModuleLoader: React.FC<IModuleLoader>;
export { ModuleLoader };
export type { IModuleLoader };

/// <reference types="react" />
interface IThemeSwitch {
    isDarkTheme: boolean;
    onChange: () => void;
}
declare const ThemeSwitch: ({ isDarkTheme, onChange }: IThemeSwitch) => JSX.Element;
export { ThemeSwitch };

import React from 'react';
import { UploadDocumentType } from '../index';
declare type DocumentTemplate = {
    component: React.ReactNode;
    errorIcon: React.ReactNode;
};
export declare const DOCUMENT_TEMPLATES: Record<UploadDocumentType, DocumentTemplate>;
export {};

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

declare module 'uikit/components/Loader' {
/// <reference types="react" />
interface ILoader {
    style?: object;
    isStop?: boolean;
}
declare const Loader: ({ style, isStop }: ILoader) => JSX.Element;
export { Loader };
export type { ILoader };

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
    onError: (error: any) => void;
    onLoad: () => void;
    onDone: () => void;
}
declare const ModuleLoader: React.FC<IModuleLoader>;
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

declare module 'uikit/components/Upload/constants' {
import React from 'react';
import { UploadDocumentType } from '../index';
declare type DocumentTemplate = {
    component: React.ReactNode;
    errorIcon: React.ReactNode;
};
export declare const DOCUMENT_TEMPLATES: Record<UploadDocumentType, DocumentTemplate>;
export {};

};

declare module 'uikit/components/Upload' {
import React from 'react';
import { UploadDocumentType } from '../index';
declare type DocumentTemplate = {
    component: React.ReactNode;
    errorIcon: React.ReactNode;
};
export declare const DOCUMENT_TEMPLATES: Record<UploadDocumentType, DocumentTemplate>;
export {};

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

declare module 'uikit/icons/FileCrossIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").MemoExoticComponent<React.FC<SvgIconProps<"svg", {}>>>;
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
declare const _default: import("react").MemoExoticComponent<React.FC<SvgIconProps<"svg", {}>>>;
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
export { default as FileCrossIcon } from './FileCrossIcon';
export { default as FinanceLawIcon } from './FinanceLawIcon';
export { default as HealthcareIcon } from './HealthcareIcon';
export { default as HedgingIcon } from './HedgingIcon';
export { default as IOSIcon } from './IOSIcon';
export { default as LeftArrow } from './LeftArrowMobilMode';
export { default as LockIcon } from './LockIcon';
export { default as Logo } from './Logo';
export { default as MacIcon } from './MacIcon';
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
export { default as TickIcon } from './TickIcon';
export { default as UnemployedIcon } from './UnemployedIcon';
export { default as UtilityBillIcon } from './UtilityBillIcon';
export { default as WindowsIcon } from './WindowsIcon';

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
declare const _default: import("react").MemoExoticComponent<React.FC<SvgIconProps<"svg", {}>>>;
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

declare module 'uikit/icons/Logo' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/icons/MacIcon' {
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

declare module 'uikit/icons/PassportIcon' {
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

declare module 'uikit/icons/TickIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").MemoExoticComponent<React.FC<SvgIconProps<"svg", {}>>>;
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
        A100: string;
        A200: string;
        A300: string;
    };
    dark: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        A200: string;
        A300: string;
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
        A100: string;
        A200: string;
        A300: string;
        A400: string;
        A500: string;
        A600: string;
        A700: string;
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
        A100: string;
        A200: string;
        A300: string;
        A400: string;
        A500: string;
        A600: string;
        A700: string;
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
        0: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
};
export { colors };

import { Theme, ThemeOptions } from '@mui/material';
declare const init: (nameTheme: string, updateTheme: ThemeOptions) => Theme;
export { init as initTheme };
export type { Theme };

import { PaletteMode, ThemeOptions } from '@mui/material';
declare type TCard = {
    color?: string;
    border?: string;
    background?: string;
    hover: {
        color?: string;
        border?: string;
        background?: string;
    };
    disabled: {
        color?: string;
        border?: string;
        background?: string;
    };
};
declare type TInput = {
    primary?: string;
};
declare type TPaletteBase = {
    primary?: string;
    secondary?: string;
};
declare type TDocumentPlaceholder = TPaletteBase;
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        border?: {
            neutral: string;
        };
        card?: TCard;
        input?: TInput;
        document?: TDocumentPlaceholder;
    }
    interface PaletteOptions {
        border?: {
            neutral: string;
        };
        card?: TCard;
        input?: TInput;
        document?: TDocumentPlaceholder;
        icon?: TPaletteBase;
        progress?: TPaletteBase;
    }
    interface SimplePaletteColorOptions {
        secondary?: string;
        alternative?: string;
    }
    interface TypeBackground {
        root: string;
        sumsub: string;
    }
    interface TypeText {
        dark?: string;
        light?: string;
        white?: string;
    }
}
export declare const getTheme: (mode?: PaletteMode) => ThemeOptions;
export {};

};
