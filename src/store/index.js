import {createLogger, createStore} from 'vuex'

import app from "./modules/app.js"
import layout from "./modules/layout.js"
import user from "./modules/user.js"
import getters from './getters.js'
import { isNotProduction } from "@/tools/common";

const debug = isNotProduction()

export default createStore({
  state: {
     app,
     layout,
    user
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
