<template>
  <div id="app">
    <h2>{{ $route.name }}</h2>
    <hr>
    <div class="router">
      <div class="router-links">
        <router-link to="/"><p>Home</p></router-link>|
        <router-link to="/app"><p>Todo</p></router-link>
      </div>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Home from './views/Home'
// import TodoApp from './views/TodoApp'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // Home,
    // TodoApp
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>
#app{
    margin: 0px auto;
    background:#d8d8d8;
    overflow:auto;
    height:100vh;
}
.router{
  padding:5px;
}
a{
  color: rgb(151, 16, 16);
}
.router-links{
  padding: 8px 0px 8px 0px;
  margin: 0 auto 0 auto;
  font-size: 20px;
  width: 120px;
  display: flex;
  justify-content: space-between;
}
h2{
  padding: 10px;
  color: rgb(110, 95, 243);
}
hr{
  width: 100%;
}
</style>