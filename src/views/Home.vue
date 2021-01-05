<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
      :style="colorContador">Mi contador: {{contador}}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminur ></BtnDisminur>
    <hr>
    <BtnAccion :estado="true"></BtnAccion>
    <BtnAccion :estado="false"></BtnAccion>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations, mapActions} from 'vuex'
import BtnDisminur from '../components/BtnDisminur'
import BtnAccion from '../components/BtnAccion'

export default {
  name: 'Home',
  components: {
    BtnDisminur,
    BtnAccion
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
       return [ this.contador > 100 ? {'color': 'green'} : {'color' : 'red'}]
    }
  },
  methods: {
    //No se recomienda mapear las mutaciones
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
