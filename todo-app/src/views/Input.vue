<template>
  <div class="text-center">
    <label for="name">Name:</label>
    <input v-model="fname.name" @keyup.enter="submit" type="text" class="form-control">
    <label for="name">Name:</label>
    <input v-model="fname.email" @keyup.enter="submit" type="text" class="form-control">
    <button @click="submit" type="button" class="btn btn-primary mt-5">Submit</button>
    <div class="text-start">
    <div v-for="(fname) in tasks" :key="fname">Name:{{fname.names}} Email:{{fname.emails}}</div>
    <!-- <div v-for="(email,index) in tasks" :key="index">Email:{{email.emails}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
    name:"Input",
    props:{msg:String},
        data(){
        return{
            fname:' ',
            tasks:[]
            }
        },
    methods:{
        submit(){
            if(this.fname.length ===0) return;
                 this.tasks.push({
                    names:this.fname.name,
                     emails: this.fname.email,
                 });
            //  console.log(this.email);
            this.fname ='';
        }
    }
}
</script>

<style>

</style>