import React from 'react'
import {
  IInitStateR,
  IInitStorageR,
  initEvents,
  initLocale,
  initState,
  initStorage,
} from 'common/inits'
import { Bus, IBus } from 'common/tools'
import { i18n } from 'i18next'

import config from '../config'
import initApi, { IInitApiR } from '../services/api'
import { initTheme, Theme } from '../themes'
import en from '../translation/en.json'
import ru from '../translation/ru.json'
import events from './events'
import State from './state'

interface IContext {
  storage: IInitStorageR
  i18next: i18n
  api: IInitApiR
  state: IInitStateR
  theme: Theme | null
  bus: IBus
}

const Context = React.createContext<any>({})

const useContext = (): IContext => React.useContext(Context)

async function init(bus: IBus | null) {
  const storage = initStorage({
    main: {
      storage: localStorage,
    },
    app: {
      name: config.appName,
      storage: localStorage,
    },
  })

  const i18next = initLocale({
    ...config.i18next,
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
  })

  const api = initApi(config.api, storage)

  const state = initState(storage, new State())

  const theme = bus ? null : initTheme(config.theme, {})

  const currentBus = bus || new Bus()

  const context = { storage, i18next, api, state, theme, bus: currentBus }

  initEvents({ storage, i18next, state, bus: currentBus }, events)

  return context
}

export default init
export { Context, useContext }
export type { IContext }
