<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    computed:{
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd']),
     /* count(){
        return this.$store.state.count
      },
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }*/
    },
    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync']),
      /*increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }*/
    }
  }
</script>

<style scoped>

</style>

