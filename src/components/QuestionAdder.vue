<template>
<div class="addquestion">
 <div id = "nav">
       <router-link to="/pastpapers">Past Paper</router-link> |
       <router-link to="/modelpapers">Model Paper</router-link> |
       <router-link to="/videosupload/stu"> Upload Videos</router-link> 
     </div>
  <h6>Add Questions Here </h6>
</div>

</template>

<script>
export default {
    name : 'question adder'

}
</script>

<style>
h6 {
    color: rosybrown;
    font-size: 90px;
}
.addquestion {
  background-image:url('../assets/p7.jpg'); 
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