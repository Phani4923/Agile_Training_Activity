<template>
  <div class='newTodo'>
        <input  class="t-t" type="text" v-model="newTodoItem" @keyup.enter="addNewTodo"/>
        <input  class="t-s" type="submit" value="Create ToDo" @click="openBox"/>
  </div>
</template>

<script>
export default {
    name:"CreateNewTodoItem",
    data(){
        return {
        newTodoItem : "",
        inputBox:true,
        b:false
        };
    },
    methods:{
        addNewTodo(){
            if(this.newTodoItem.trim().length!=0)
            {
                this.$store.dispatch('addNewTodo',this.newTodoItem);
                this.newTodoItem="";
            }
        },
        openBox(){
            this.b=!this.b;
            // alert(this.inputBox+" "+this.b)
        }
    }
}
</script>

<style scoped> 
.t-t{
    margin: 30px auto auto 15px;
    min-height: 45px;
    max-height: max-content;
    width: 100%;
    background: white;
    border: solid thin;
}
.t-s{
    font-size: 18px;
    background: rgb(230, 178, 84);
    margin: 25px 15px;
    /* font-size: 20px; */
    border: solid thin;
    border-radius: 8px;
    padding: 10px 20px 10px 20px;
}
.newTodo{
    /* border: solid thin; */
    float: left;
    width: 35%;
    margin-left: 2%;
    margin-top: 1%;
    padding: 0px 7% 0px 3%;
    font-size: 20px;
    height: 100%;
}
</style>