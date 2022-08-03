<template>
  <div id="app" class="text-center container ">
    <!-- <todo-app></todo-app> -->
     <!-- <InputVue></InputVue> -->
     <!-- <ToDoList></ToDoList> -->
     <!-- <router-link to="/system">Welcome</router-link><br>-->
      <router-view></router-view>
     <!-- <system-vue></system-vue> -->
  </div>
</template>

<script>
// import TodoApp from './components/TodoApp.vue'
//  import ToDoList from '@/components/ToDoList.vue'
// import InputVue from './components/Input.vue'
 //import systemVue from './system.vue'
export default {
  name: 'App',
  components: {
    // TodoApp
    //InputVue
    // ToDoList,
     //systemVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
