import Vue from 'vue'
import Vuex from 'vuex'
// import TodoApp from '../components/TodoApp'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state:{
    todos:[],
    sampleTodos:[]
  },
  mutations:{
        NEWTODO(state,item){
          state.todos.unshift({
            Name:item,
            completed:false
          })
        },
        DELETETODO(state,item){
          state.todos.splice(state.todos.indexOf(item),1)
          // alert(state.todos.length);
        },
        DISPLAYALL(state){
          state.sampleTodos=state.todos
        },
        DISPLAYACTIVE(state){
          // alert("hai")
          state.sampleTodos=state.todos.filter((todo) => !todo.completed)
        },
        DISPLAYCOMPLETED(state){
          state.sampleTodos=state.todos.filter((todo) => todo.completed)
        },
        RALLTODOS(state){
          // alert("hai")
          state.todos=[]
        }
  },
  getters:{

  },
  actions:{
        addNewTodo({commit},item){
            commit('NEWTODO',item)
        },
        removeTodo({commit},item){
            commit('DELETETODO',item)
        },
        displayAll({commit}){
            commit('DISPLAYALL')
        },
        displayActive({commit}){
            commit('DISPLAYACTIVE')
        },
        displayCompleted({commit})
        {
          commit('DISPLAYCOMPLETED')
        },
        rAllTodos({commit})
        {
          commit('RALLTODOS')
        }
  },
  plugins: [vuexLocal.plugin]
});
