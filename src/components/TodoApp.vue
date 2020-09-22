<template>
<div class="todoapp">
  <h1 class="welcomeApp">Welcome to Todo App</h1>   
  <Filtering />  
  <CreateNewTodoItem />
  <TodoList/>
</div>
</template>
<script>
import TodoList from './TodoList';
import CreateNewTodoItem from './CreateNewTodoItem';
import Filtering from './Filtering'
export default {
  name: 'TodoApp',
  components:{
    TodoList,
    CreateNewTodoItem,
    Filtering
  }
}
</script>
<style scoped>
.todoapp{
  margin: 25px auto;
}
.welcomeApp{
  color:gray;
  text-align: center;
}
</style>