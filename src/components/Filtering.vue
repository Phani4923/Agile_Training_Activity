<template>
    <div class="filter">
            <button :class="{'status':alstat}" @click="allTodos">All [{{ $store.state.todos.length }}]</button>
            <button :class="{'status':actstat}" @click="activeTodos">Active [{{ $store.state.todos.filter((item)=> !item.completed).length }}]</button>
            <button :class="{'status':comstat}" @click="completedTodos">Completed [{{ $store.state.todos.filter((item)=> item.completed).length }}]</button>
            <button class="rAllTodo" @click="removeAllTodos">Remove all Todos</button>
    </div>
</template>

<script>
export default {
    name:'Filtering',
    data(){
        return{
            alstat:false,
            actstat:false,
            comstat:false,
            // rlt:false
        }
    },
    methods:{
        allTodos(){
                this.$store.dispatch('displayAll');
                this.alstat=true;
                this.actstat=false;
                this.comstat=false;
        },
        activeTodos(){
                this.$store.dispatch('displayActive');
                this.alstat=false;
                this.actstat=true;
                this.comstat=false;
        },
        completedTodos(){
                this.$store.dispatch('displayCompleted');
                this.alstat=false;
                this.actstat=false;
                this.comstat=true;
        },
        removeAllTodos(){
                let r=confirm("Removing All ToDos")
                if(r){
                this.$store.dispatch('rAllTodos');
                this.allTodos();
                }       
        }
    },
    created(){
            this.allTodos()
        },
    updated(){
        if(this.alstat)
        {
            this.allTodos();
        }
        else if(this.actstat)
        {
            this.activeTodos();
        }
        else{
            this.completedTodos();
        }
    }
}
</script>

<style scoped>
.filter{
    float: left;
    margin-top: 23px;
    margin-left: 46%;
    width: max-content;
    height: max-content;
    /* border: solid thin; */
    padding: 2px 2px 2px 2px;
}
button{
    /* width: max-content; */
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
    border: solid thin;
    margin:7px 10px 10px 20px;
}
.status{
    background-color:rgb(177, 119, 140);
}
.rAllTodo{
    font-size: 18px;
    background: rgb(252, 95, 95);
}
</style>