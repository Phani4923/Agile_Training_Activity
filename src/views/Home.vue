<template>
  <div class="container">
      <div class="form"> 
        <h1>Login</h1>  
        <div class="display-1">
            <label>UserName:</label>
            <input class="textType" type="text">
        </div>
        <div class="display-2">
            <label>Password:</label>
            <input class="passwordType" type="password">
        </div>
        <button class="submitType" value="Submit" @click="routeToApp">Submit</button>
      </div>
  </div>
</template>

<script>
import router from '../router/index'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  methods:{
    routeToApp(){
      router.push('/app')
    }
  }
}
</script>
<style>
.container{
  margin: 20px auto;
  text-align: center;
  /* border:solid thin; */
}
h1{
  color: gray;
}
label{
  margin-left: 0%;
  font-size: 20px;
  display: flex;
}
.submitType{
  margin: 20px;
  font-size: 20px;
  border: solid thin;
  border-radius: 5px;
  padding: 10px 90px 10px 90px;
  background-color: teal;
  color:white;
}
.textType,.passwordType{
  background: white;
  height: 40px;
  margin-top: 10px; 
  border: solid thin;
  border-radius: 5px;
  width: 100%;
  font-size: 20px;
  padding-left: 8px;
}
.form{
  background: white;
  text-align: center;
  padding: 30px 15px 5px 15px;
  width: max-content;
  border: solid thin;
  border-radius: 15px;
  margin: 0px auto;
}
.display-1{
  /* border: solid thin; */
  margin: 20px auto;
  width: 400px;
  /* display: flex;
  justify-content: space-between; */
}
.display-2{
  /* border: solid thin; */
  margin: 20px auto;
  width: 400px;
  /* display: flex;
  justify-content: space-between; */
}
</style>