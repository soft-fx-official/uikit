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
