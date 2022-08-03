<template>
  <div class="text-center container">
    <h1>Student List System</h1>
    <div class="border shadow-lg container mt-5 rounded-3 bg-secondary bg-opacity-25" style="width:500px;">
        <div class="float-end fs-3 text-"><i class="fa fa-question-circle-o" aria-hidden="true"></i></div>
        <h1 class="mt-5 fw-bold">LOGIN</h1>
        <form class="form-group mt-3">
            <label for="userid" class="form-label fs-5">UserID:</label>
            <input type="text" class="form-control" id="user">
            <label for="password" class="form-label fs-5 mt-3">Password:</label>
            <input type="password" class="form-control" id="pass" @keyup.enter="login">
        </form>
        <div class="mt-5"><a href="#"><sup>*</sup>Forgot password Plase Contact Your Admin!</a></div>
        <button class="btn btn-primary mt-5 mb-5 fw-bold" @click="login">LOGIN <i class="fa fa-sign-in" aria-hidden="true"></i></button>
    </div>
  </div>
</template>

<script>
export default {
     methods:{
         login(){
             var users = document.getElementById("user").value;
             var passs = document.getElementById("pass").value;
             if(users==="admin" && passs==="@admin"){
                 window.alert("Login Success");
                  this.$router.push('/dashboard');
             }else{
                 window.alert("Login Unsuccess");
             }
         }
     }
}
</script>

<style>

</style>