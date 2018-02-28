<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoMain/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Main from './components/Main'
  import Footer from './components/Footer'
  export default {

    mounted () {
      this.$store.dispatch('reqTodos')
    },
    //v-bind : 向组建传递动态数据
    //所有的指令都是用来操作标签的
    components: {
      TodoHeader: Header,
      TodoMain: Main,
      TodoFooter: Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
