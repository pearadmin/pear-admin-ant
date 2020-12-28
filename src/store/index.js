import {createLogger, createStore} from 'vuex'

import getters from './getters.js'
import modules from "./store";
import { isNotProduction } from "@/utils/util";

const debug = isNotProduction()

export default createStore({
  modules,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
