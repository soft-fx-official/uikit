/// <reference types="common" />
import React from 'react';
import { IBus } from 'common/tools';
interface IModuleLoader {
    url: string;
    scope: string;
    module: string;
    bus: IBus | null;
    fallback: React.ReactElement | string | undefined;
    onError: () => void;
    onLoad: () => void;
    onDone: () => void;
}
declare const ModuleLoader: ({ url, scope, module, bus, fallback, onError, onLoad, onDone, }: IModuleLoader) => JSX.Element;
export { ModuleLoader };
export type { IModuleLoader };
