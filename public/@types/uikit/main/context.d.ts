/// <reference types="common" />
import { IInitStateR, IInitStorageR } from 'common/inits';
import { IBus } from 'common/tools';
import { i18n } from 'i18next';
import { IInitApiR } from '../services/api';
import { Theme } from '../themes';
interface IContext {
    storage: IInitStorageR;
    i18next: i18n;
    api: IInitApiR;
    state: IInitStateR;
    theme: Theme | null;
    bus: IBus;
}
declare const Context: any;
declare const useContext: () => IContext;
declare function init(bus: IBus | null): Promise<{
    storage: any;
    i18next: any;
    api: IInitApiR;
    state: any;
    theme: Theme;
    bus: IBus;
}>;
export default init;
export { Context, useContext };
export type { IContext };
