/*包含多个对应事件回调函数的对象*/
import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETED, RECEIVE_TODOS, CHECK_TODOS} from './mutations-type'
import storageUtil from '../util/storageUtil'
export default {
  //添加todo的方法
  addTodo({commit},todo){
    commit(ADD_TODO,todo)
  },
  //删除todo
  deleteTodo({commit},index){
    commit(DELETE_TODO,index)
  },
  selectAll({commit},check){
    commit(SELECT_ALL, check)
  },
  deleteCompleted({commit}){
    commit(DELETE_COMPLETED)
  },

  reqTodos ({commit}) {
    //模拟
    setTimeout(() => {
      // 读取数据
      const todos = storageUtil.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  },
  checkTodo({commit},{todo,check}){
    commit(CHECK_TODOS, {todo, check})
  }
}
