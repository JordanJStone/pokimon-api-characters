import Poki from "./Models/Poki.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Poki[]} */
  myPokimon = []
  apiPokimon = []
  /** @type {Poki} */
  activePokimon = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    console.log(value)
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
