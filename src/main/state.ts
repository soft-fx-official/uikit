import { makeAutoObservable } from 'mobx'

class State {
  constructor() {
    makeAutoObservable(this)
  }
}

export default State
