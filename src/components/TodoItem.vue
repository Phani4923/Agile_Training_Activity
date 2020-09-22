<template>
<div :class="{'is-completed':todo.completed}" @blur="blurIt" @click="changeIt(todo)" class="todo">
        <div class="cancel" @click="deleteTodo"> 
            &times; 
        </div>
        <p >{{ todo.Name }}</p>
        <!-- <input @blur="blurIt" @keyup.enter="changeNameEnter(todo)" v-else type="text" v-model="updatedName"> -->
</div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
    props:["todo"],
    data(){
        return{
            updateName:false,
            updatedName:'',
            delTodo:false
            // dbClkCol:"",
            // isItChanged:false
        }
    },
    methods:{
        changeName(todo){
            this.updateName=!this.updateName;
            this.updatedName=todo.Name;
            todo.completed=false;
        },
        changeNameEnter(todo){
            todo.Name=this.updatedName;
            this.updateName=false;
        },
        blurIt(){
            this.updateName=false;
        },
        deleteTodo(){
            this.delTodo=!this.delTodo;
            // alert("calledDelete")
            this.$store.dispatch('removeTodo',this.todo)
        },
        changeIt(item){
            if(this.delTodo)
            {
                this.delTodo=false;
                return
            }
            // this.isItChanged=!this.isItChanged;
            let clck=this.$store.state.todos[this.$store.state.todos.indexOf(item)].completed
            // alert(clck)
            if(!clck){
                // this.dbClkCol='#40ff00';
                this.$store.state.todos[this.$store.state.todos.indexOf(item)].completed=true;
            }
            else{
                this.$store.state.todos[this.$store.state.todos.indexOf(item)].completed=false;
                // this.dbClkCol=''
                // this.$store.state.todos[this.$store.state.todos.indexOf(item)].completed=false;
            }
        }
    }
}
</script>
<style scoped>
.todo{
    
    background-color: rgb(221, 214, 174);
    margin: 10px 50px 10px 25px;
    /* width: fit-content; */
    height: 100%;
    border: solid thin;
    float: left;
    min-width: 300px;
    max-width: max-content;
    min-height: 50%;
    max-height: max-content;
    border-radius:3px;
    /* cursor: pointer; */
    transition: 0.6s;
}
p{
    /* border: solid thin; */
    width: max-content;
    height: fit-content;
    padding: 0px 20px 30px 35px;
}
.cancel{
    width: fit-content;
    height: fit-content;
    /* border: solid thin; */
    margin: 0% auto auto 2%;
    font-size: 28px;
    cursor: pointer;
}
.cancel:hover{ 
    color: red;
    transition: 0.3s;
    /* font-size: 29px; */
    /* cursor: pointer; */
}
.is-completed{
    background-color: rgb(177, 174, 174);
    
}
</style>