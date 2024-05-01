<template>
<div id = "app">
     <router-view/>
  </div>

</template>

<script>
//import { projectFirestore } from '../firebase/config'
/**export default{
  beforeCreate() {
    projectFirestore.collection('App Info').doc('Server_Id').get().then(e => {
    var details = e.data()  
    //this.examlist = e.data()
    console.log(details.ServerId)
    const serverId = details.ServerId


  }).catch((e)=> {
    console.log(e)
    


  })
      console.log("beforeCreate")
    },
}**/
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(216, 243, 253);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
