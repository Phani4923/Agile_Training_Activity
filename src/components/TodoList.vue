<template>
    <div class="todos" >
        <TodoItem class="todo-item" v-for="(todo,index) in todos" :key="index" :todo="todo" @dblclick="changeStatus(todo)"/>
    </div>
</template>

<script>
import TodoItem from './TodoItem';
//import {mapState} from 'vuex';
export default {
    name:'TodoList',
    components:{
        TodoItem
    },
    methods:{
        changeStatus(item){
            item
        }
    },
    computed:{
        todos() 
        {
           return this.$store.state.sampleTodos;
        }   
    }
}
</script>

<style scoped>
.todos{
    /* border: thin solid; */
    padding-left: 3%;
    width:60%;
    height: 100%; 
    margin-left: 35%;
    margin-top: 8%;
}
.todo-item{    
    font-size: 20px;
}
</style>