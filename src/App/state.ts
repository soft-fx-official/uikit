import { makeAutoObservable } from 'mobx'

import config from '../config'

interface IState {}

const defaultStateParams = {}

class State implements IState {
  constructor(args: IState) {
    makeAutoObservable(this)
  }
}

export default State
export { defaultStateParams }
export type { IState }
