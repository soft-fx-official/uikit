/// <reference types="common" />
/// <reference types="react" />
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
declare const ModuleLoader: ({ url, scope, module, bus, onError, onLoad, onDone, }: IModuleLoader) => JSX.Element;
export { ModuleLoader };
export type { IModuleLoader };
