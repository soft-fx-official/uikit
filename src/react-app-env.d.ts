/// <reference types="react-scripts" />

// eslint-disable-next-line max-classes-per-file
declare module '@common/hooks' {
  export const useTimer: any
  export const useCreateForm: any

  interface IUseDynamicScriptR {
    ready: boolean
    failed: boolean
  }
  export const useDynamicScript: (url: string) => IUseDynamicScriptR
}

declare module '@common/tools' {
  declare function loadDynamicComponent(scope: string, module: string): any

  type TStorageValue =
    | string
    | number
    | boolean
    | null
    | Array<TStorageValue>
    | { [key: string]: TStorageValue }

  interface IStorage {
    setItem: (key: string, value: string) => void
    getItem: (key: string) => string | null
    clear: () => void
  }

  interface IBaseStorage {
    readonly namespace: string

    get: (path: string) => TStorageValue
    set: (path: string, value: TStorageValue) => this
    remove: (path: string) => this
    clear: () => this
  }

  declare class BaseStorage implements IBaseStorage {
    constructor(namespace: string, storage: IStorage)

    readonly namespace: string

    protected storage: IStorage

    protected data: object

    get: (path: string) => TStorageValue

    set: (path: string, value: TStorageValue) => this

    remove: (path: string) => this

    clear: () => this
  }

  type TBusValues = number | string | Array<TBusValues> | { [name: string]: TBusValues }

  type TBusArgs = { [name: string]: any }

  type TBusGetData = () => TBusValues

  type TBusData = { [name: string]: Array<TBusGetData> }

  type TBusEventCallback = (args: TBusArgs) => void

  type TBusEvents = { [name: string]: Array<TBusEventCallback> }

  interface IBus {
    events: TBusEvents
    data: TBusData
    on: (name: string, callback: TBusEventCallback) => void
    say: (name: string, args?: TBusArgs) => void
    save: (name: string, getData: TBusGetData) => void
    get: (name: string, dataDefault: TBusValues | null) => TBusValues | null
    getAll: (name: string) => Array<TBusValues>
  }

  declare class Bus implements IBus {
    events: TBusEvents

    constructor(events?: TBusEvents)

    data: TBusData

    on: (name: string, callback: TBusEventCallback) => void

    say: (name: string, args?: TBusArgs) => void

    save: (name: string, getData: TBusGetData) => void

    get: (name: string, dataDefault: TBusValues | null) => TBusValues | null

    getAll: (name: string) => Array<TBusValues>
  }

  export { Bus, loadDynamicComponent, BaseStorage as Storage }
  export type {
    IBaseStorage,
    IBus,
    IStorage,
    TBusArgs,
    TBusData,
    TBusEventCallback,
    TBusEvents,
    TBusGetData,
    TBusValues,
    TStorageValue,
  }
}
