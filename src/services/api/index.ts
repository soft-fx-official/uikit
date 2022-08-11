import { IInitStorageR } from 'common/inits'

import { Api, ApiConfig, RequestParams } from './main'

interface SecurityData {
  Authorization: string
}

interface IInitApi {
  main: {
    baseUrl: string
  }
}

interface IInitApiR {
  main: Api<SecurityData>['api']
  setSecurityData: (token: string) => void
}

class Rest {
  readonly apiClient: Api<SecurityData>

  readonly onApiTokenChange: (token: string | null) => void

  constructor(config: ApiConfig<SecurityData>, tokenManager: TokenManager) {
    this.apiClient = new Api({ baseUrl: config.baseUrl, securityWorker: this.securityWorker })
    this.onApiTokenChange = tokenManager.onApiTokenChange
    this.setSecurityData(tokenManager.apiToken)
  }

  // eslint-disable-next-line class-methods-use-this
  private securityWorker = (securityData: SecurityData | null): RequestParams | undefined => {
    if (!securityData) {
      return undefined
    }
    return { headers: securityData } as any
  }

  public setSecurityData = (token: string | null): void => {
    this.apiClient.setSecurityData(token ? { Authorization: `Bearer ${token}` } : null)
    this.onApiTokenChange(token)
  }
}

const TOKEN_KEY = 'apiToken'

type TokenManager = {
  apiToken: string | null
  onApiTokenChange: (token: string | null) => void
}

const makeTokenManager = (storage: IInitStorageR): TokenManager => {
  const apiToken = storage.main.get(TOKEN_KEY) || storage.app.get(TOKEN_KEY)
  const onApiTokenChange = (token: string | null) => {
    storage.main.set(TOKEN_KEY, token)
    storage.app.set(TOKEN_KEY, token)
  }

  return {
    apiToken: apiToken ? apiToken.toString() : null,
    onApiTokenChange,
  }
}

function init(config: IInitApi, storage: IInitStorageR): IInitApiR {
  const rest = new Rest({ baseUrl: config.main.baseUrl }, makeTokenManager(storage))

  return {
    main: rest.apiClient.api,
    setSecurityData: rest.setSecurityData,
  }
}

export default init
export type { IInitApi, IInitApiR }
