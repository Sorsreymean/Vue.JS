<template>
<div class="text-center">
  <h1 class="display-2">Dashboard</h1>
  <h1>System of University of Bright School(UBC)</h1>
  <form class="form-group d-flex m-auto mt-5"  style="width:1000px;">
    <label for="stage" class="form-label ms-3 fs-4">Stage:</label>
    <select class="form-select" id="select1">
        <option>Choose Stage</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
    </select>
    <label for="year" class="form-label ms-3 fs-4">Years:</label>
    <select class="form-select" id="select2">
        <option>Choose year</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <label for="semester" class="form-label ms-3 fs-4">Semester:</label>
    <select class="form-select" id="select3">
        <option>Choose semester</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
  </form>
 <router-link to="/major"><button type="button" class="btn btn-primary mt-3 fs-5" @click="enter()">Enter <i class="fa fa-sign-in" aria-hidden="true"></i></button></router-link>
</div>
</template>

<script>
export default {
    name:"dashboard",
    props:{msg:String},
    data(){
        return{
            // stages:'',
            // system:'',
            // dash:[]
        }
    },
    methods:{
        // enter(){
        //     const s1 =document.getElementById("select1").value;
        //     const s2 =document.getElementById("select2").value;
        //     const s3 =document.getElementById("select3").value;
        //     if(s1==14&&s2==2&&s3==2){
        //         this.$router.push('/major');
        //     }
        // }
    }
}
</script>

<style>

</style>