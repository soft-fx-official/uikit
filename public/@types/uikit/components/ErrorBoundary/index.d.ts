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
