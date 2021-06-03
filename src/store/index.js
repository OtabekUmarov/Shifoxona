import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hodimlar: [],
    bemorlar: [],
    hodimSoni: 10,
    search:'',
    bId: '',
    hId: '',
  },
  getters: {
    getSearch(state){
      return s => {
        state.search = s
      }
    },
    showBemor(state){
      return b => {
        state.bId = b
      }
    },
    showHodim(state){
      return b => {
        state.hId = b
      }
    },
    viewBemor(state){
      return state.bemorlar.find(b => {
        if(b.id == state.bId) return b
      })
    },
    viewHodim(state){
      return state.hodimlar.find(b => {
        if(b.id == state.hId) return b
      })
    },
    bemorlar(state){
      return state.bemorlar.filter(l => {
        return l.ism.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
    },
    hodimlar(state){
      return state.hodimlar.filter(l => {
        return l.ism.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
    },
    countBemor(state){
      return state.bemorlar.length
    },
    countHodim(state){
      return state.hodimlar.length
    },
    shifokorlar(state) {
      let shifokor = []
      for (let i = 0; i < state.hodimlar.length; i++) {
        shifokor.push(state.hodimlar[i].ism)
      }
      return shifokor
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
    },
    removeBemor(state,payload){
      state.bemorlar.splice(state.bemorlar.findIndex(function(i){ return i.id === payload; }), 1);
    },
    removeHodim(state,payload){
      state.hodimlar.splice(state.hodimlar.findIndex(function(i){ return i.id === payload; }), 1);
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
    },
    delBemor(context,id){
      axios.delete('http://localhost:3000/bemor/'+id).then(response => {
        console.log(response)
        context.commit('removeBemor',id)
      })
    },
    delHodim(context,id){
      axios.delete('http://localhost:3000/hodim/'+id).then(response => {
        console.log(response)
        context.commit('removeHodim',id)
      })
    }
  }
})