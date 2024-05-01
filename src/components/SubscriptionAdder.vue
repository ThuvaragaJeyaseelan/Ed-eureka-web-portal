<template>
<div class="addsubscription">
  <div id = "nav">
       <!-- <router-link to="/questionform">Question Form</router-link> | -->
       <router-link to="/screenshots">Screenshots</router-link> |
       <!-- <router-link to="/videosupload"> Upload Videos</router-link> | -->
       <!-- <router-link to="/tutorialsupload"> Upload Tutorials</router-link> | -->
      <router-link to="/upload link">Exam Link</router-link> |
       <router-link to="/AddUser">Add User</router-link>
 
     </div>
     <!-- <h6>Add Subscriptions Here</h6> -->
</div>
</template>

<script>
export default {
    name : 'subscription adder'

}
</script>

<style>
h6 {
    color: rosybrown;
    font-size: 12vh;
}
.addsubscription {
  background-image:url('../assets/p9.jpg'); 
   -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh !important;
}
#nav {
  color: blue;
  font-size: larger;
  font-weight: bold;
  background-color: white;
}

</style>