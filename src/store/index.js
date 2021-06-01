import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hodimlar: [],
    bemorlar: [],
    hodimSoni: 10
  },
  getters: {
    bemorlar(state){
      return state.bemorlar
    },
    hodimlar(state){
      return state.hodimlar
    },
    countBemor(state){
      return state.bemorlar.length
    },
    countHodim(state){
      return state.hodimlar.length
    }
  },
  mutations: {
    bemor(state,payload){
      state.bemorlar.push(payload)
    },
    bemorAll(state,payload){
      state.bemorlar = payload
    },
    hodim(state,payload){
      state.hodimlar.push(payload)
    },
    hodimAll(state,payload){
      state.hodimlar = payload
    }
  },
  actions: {
    bemorlar(context,yangiBemor){
      axios.post('http://localhost:3000/bemor', yangiBemor).then(response => {
        context.commit('bemor', response.data)
      })
    },
    bemorlarAll(context){
      axios.get('http://localhost:3000/bemor').then(response => {
        context.commit('bemorAll', response.data)
      })
    },
    hodimlar(context,yangiHodim){
      axios.post('http://localhost:3000/hodim', yangiHodim).then(response => {
        context.commit('hodim', response.data)
      })
    },
    hodimlarAll(context){
      axios.get('http://localhost:3000/hodim').then(response => {
        context.commit('hodimAll', response.data)
      })
    }
  }
})