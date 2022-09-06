/// <reference types="common" />
import { IInitStateR, IInitStorageR } from 'common/inits';
import { IBus } from 'common/tools';
import { i18n } from 'i18next';
interface IInitEvent {
    storage: IInitStorageR;
    i18next: i18n;
    state: IInitStateR;
    bus: IBus;
}
declare function events({ storage, i18next, state, bus }: IInitEvent): void;
export default events;
