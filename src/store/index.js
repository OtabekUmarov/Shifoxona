import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hodimlar: [],
    hodimSoni: 10
  },
  getters: {
    countHodim(state){
      return state.hodimlar
    }
  },
  mutations: {
    getHodim(state,payload){
      state.hodimlar = payload
    }
  },
  actions: {
    hodim(context){
      axios.get('http://localhost:3000/hodim').then(response => {
        context.commit('getHodim', response.data)
      })
    }
  }
})