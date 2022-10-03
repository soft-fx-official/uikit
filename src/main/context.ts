import React from 'react'
import {
  IInitApp,
  IInitStateR,
  IInitStorageR,
  initApp,
  initLocale,
  initState,
  initStorage,
} from 'common/inits'
import { Bus, IBus } from 'common/tools'
import { i18n } from 'i18next'
import { setLocale } from 'yup'

import { default as initCurrentApp } from '../App/init'
import State, { defaultStateParams } from '../App/state'
import config from '../config'
import initApi, { IInitApiR } from '../services/api'
import { initTheme, Theme } from '../themes' // NOTE: diff from pattern
import en from '../translation/en.json'

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
  const isRootApp = !bus

  const currentBus = !isRootApp ? bus : new Bus()

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
    },
  })

  setLocale({
    mixed: {
      default: () => i18next.t('form.validate.invalide'),
      required: () => i18next.t('form.validate.required'),
    },
    string: {
      email: () => i18next.t('form.validate.email'),
      min: ({ min }) => i18next.t('form.validate.string.min', { min }),
      max: ({ max }) => i18next.t('form.validate.string.max', { max }),
    },
    number: {
      min: ({ min }) => i18next.t('form.validate.number.min', { min }),
      max: ({ max }) => i18next.t('form.validate.number.max', { max }),
    },
  })

  const api = initApi(config.api, storage, currentBus)

  const state = initState(storage, new State(defaultStateParams))

  const theme = !isRootApp ? null : initTheme(config.theme, {})

  const context = { storage, i18next, api, state, theme, bus: currentBus }

  if (isRootApp) {
    window.addEventListener('hashchange', () => {
      currentBus?.say('routing', { route: window.location.hash })
    })
  }

  await initApp({ storage, i18next, state, bus: currentBus, api }, initCurrentApp)

  return context
}

export default init
export { Context, useContext }
export type { IContext }
