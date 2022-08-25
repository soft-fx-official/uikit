import { IInitStorageR } from 'common/inits';
import { Api } from './main';
interface SecurityData {
    Authorization: string;
}
interface IInitApi {
    main: {
        baseUrl: string;
    };
}
interface IInitApiR {
    main: Api<SecurityData>['api'];
    setSecurityData: (token: string) => void;
}
declare function init(config: IInitApi, storage: IInitStorageR): IInitApiR;
export default init;
export type { IInitApi, IInitApiR };
