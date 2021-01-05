import { createStore } from 'vuex'

export default createStore({
  //Muy parecido a data
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state, payLoad){
      state.contador = state.contador + payLoad
    },
    disminuir(state, payLoad){
      state.contador = state.contador - payLoad
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar',10)
    },
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      }else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
