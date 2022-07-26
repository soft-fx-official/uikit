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

declare module 'uikit/components/Icons/components/AndroidIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/ArchitectureIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/ArtIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/BankStatementIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/BusinessIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/CertificateGoodIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/CertificateIncorporationIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/ComputerServicesIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/CorporateAccountIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/DrivingLicenseIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/EmployedIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/ErrorIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/FinanceLawIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/HealthcareIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/HedgingIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/IOSIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/LockIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/MemorandumAssociationIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/NationalIdCardIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/PassportIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/PDFIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/PersonalAccountIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/PowerAttorneyIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/PrintIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/RetiredIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/SalesMarketingIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/ScienceIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/SpeculationIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/StandingIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/UnemployedIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/UtilityBillIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons/components/WindowsIcon' {
/// <reference types="react" />
import { SvgIconProps } from '@mui/material';
declare const _default: import("react").NamedExoticComponent<SvgIconProps<"svg", {}>>;
export default _default;

};

declare module 'uikit/components/Icons' {
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

export { default as AndroidIcon } from './components/AndroidIcon';
export { default as ArchitectureIcon } from './components/ArchitectureIcon';
export { default as ArtIcon } from './components/ArtIcon';
export { default as BankStatementIcon } from './components/BankStatementIcon';
export { default as BusinessIcon } from './components/BusinessIcon';
export { default as CertificateGoodIcon } from './components/CertificateGoodIcon';
export { default as CertificateIncorporationIcon } from './components/CertificateIncorporationIcon';
export { default as ComputerServicesIcon } from './components/ComputerServicesIcon';
export { default as CorporateAccountIcon } from './components/CorporateAccountIcon';
export { default as DrivingLicenseIcon } from './components/DrivingLicenseIcon';
export { default as EmployedIcon } from './components/EmployedIcon';
export { default as ErrorIcon } from './components/ErrorIcon';
export { default as FinanceLawIcon } from './components/FinanceLawIcon';
export { default as HealthcareIcon } from './components/HealthcareIcon';
export { default as HedgingIcon } from './components/HedgingIcon';
export { default as IOSIcon } from './components/IOSIcon';
export { default as LockIcon } from './components/LockIcon';
export { default as MemorandumAssociationIcon } from './components/MemorandumAssociationIcon';
export { default as NationalIdCardIcon } from './components/NationalIdCardIcon';
export { default as PassportIcon } from './components/PassportIcon';
export { default as PDFIcon } from './components/PDFIcon';
export { default as PersonalAccountIcon } from './components/PersonalAccountIcon';
export { default as PowerAttorneyIcon } from './components/PowerAttorneyIcon';
export { default as PrintIcon } from './components/PrintIcon';
export { default as RetiredIcon } from './components/RetiredIcon';
export { default as SalesMarketingIcon } from './components/SalesMarketingIcon';
export { default as ScienceIcon } from './components/ScienceIcon';
export { default as SpeculationIcon } from './components/SpeculationIcon';
export { default as StandingIcon } from './components/StandingIcon';
export { default as UnemployedIcon } from './components/UnemployedIcon';
export { default as UtilityBillIcon } from './components/UtilityBillIcon';
export { default as WindowsIcon } from './components/WindowsIcon';

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

export { default as AndroidIcon } from './components/AndroidIcon';
export { default as ArchitectureIcon } from './components/ArchitectureIcon';
export { default as ArtIcon } from './components/ArtIcon';
export { default as BankStatementIcon } from './components/BankStatementIcon';
export { default as BusinessIcon } from './components/BusinessIcon';
export { default as CertificateGoodIcon } from './components/CertificateGoodIcon';
export { default as CertificateIncorporationIcon } from './components/CertificateIncorporationIcon';
export { default as ComputerServicesIcon } from './components/ComputerServicesIcon';
export { default as CorporateAccountIcon } from './components/CorporateAccountIcon';
export { default as DrivingLicenseIcon } from './components/DrivingLicenseIcon';
export { default as EmployedIcon } from './components/EmployedIcon';
export { default as ErrorIcon } from './components/ErrorIcon';
export { default as FinanceLawIcon } from './components/FinanceLawIcon';
export { default as HealthcareIcon } from './components/HealthcareIcon';
export { default as HedgingIcon } from './components/HedgingIcon';
export { default as IOSIcon } from './components/IOSIcon';
export { default as LockIcon } from './components/LockIcon';
export { default as MemorandumAssociationIcon } from './components/MemorandumAssociationIcon';
export { default as NationalIdCardIcon } from './components/NationalIdCardIcon';
export { default as PassportIcon } from './components/PassportIcon';
export { default as PDFIcon } from './components/PDFIcon';
export { default as PersonalAccountIcon } from './components/PersonalAccountIcon';
export { default as PowerAttorneyIcon } from './components/PowerAttorneyIcon';
export { default as PrintIcon } from './components/PrintIcon';
export { default as RetiredIcon } from './components/RetiredIcon';
export { default as SalesMarketingIcon } from './components/SalesMarketingIcon';
export { default as ScienceIcon } from './components/ScienceIcon';
export { default as SpeculationIcon } from './components/SpeculationIcon';
export { default as StandingIcon } from './components/StandingIcon';
export { default as UnemployedIcon } from './components/UnemployedIcon';
export { default as UtilityBillIcon } from './components/UtilityBillIcon';
export { default as WindowsIcon } from './components/WindowsIcon';

export { ButtonCard } from './ButtonCard';
export { ButtonCardContainer } from './ButtonCardContainer';
export type { IErrorBoundary } from './ErrorBoundary';
export { ErrorBoundary } from './ErrorBoundary';
export * from './Icons';
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
