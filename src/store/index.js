import { createStore } from 'vuex'

import getters from './getters.js'
import layout from './modules/layout.js'

export default createStore({
    modules: {
			layout
		},
		getters,
})
