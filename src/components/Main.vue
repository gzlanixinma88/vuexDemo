<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index"
          :index="index" :todo="todo"
    />
  </ul>
</template>

<script>
  import storageUtil from '../util/storageUtil'
  import Item from './Item'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['todos'])
    },
    watch:{
      todos:{
          deep:true,
          handler:storageUtil.saveTodos
        }
      },

    components:{
      Item
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
