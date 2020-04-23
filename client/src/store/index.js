import Vue from 'vue'
import Vuex from 'vuex'

import valuesModule from './valuesModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    valuesModule
  }
})
