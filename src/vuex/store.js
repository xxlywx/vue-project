import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      user: {},
      cart: {},
      order: {},
      shops: [],
      notification: []
    },
    actions,
    mutations,
    getters
  })
}


var product = {
  icon: '',
  name: '葱油饼',
  price: 200,
  specification: [],
  description: ''
}