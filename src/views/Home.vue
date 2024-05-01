<template>
<div class="admin-block">
  <div id="home">
      <h1>Ed-Eureka</h1>
              <div class="login-text">
        <router-link to="/register" style="color:blue; font-size:30px ;text-align:center">Log In?</router-link> 
        </div>

        <img src="../assets/focused-tiny-people-reading-books_74855-5836-removebg-preview.png" class="image" alt="Overview" >

        <!-- <button @click="login">Log in</button> -->
        <!-- <button @click="login">Login</button> -->
    </div>
</div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
import firebase from "firebase";

// @ is an alias to /src


export default {
 
  name: 'Home',
  components: {
    
  },
    async beforeCreate(){
      let user = firebase.auth().currentUser
      console.log(user !== null)
      if (user !== null){
                projectFirestore.collection('User').doc(firebase.auth().currentUser.uid).get().then(val => {
          this.details =val.data()
          console.log(this.details.userType)
          this.form.role=this.details.userType
          if (this.form.role === 'Super Admin') {
            this.$router.push({path:'/addquestion',params:{ id:this.form.role }})
            
          }
          if (this.form.role === 'Admin') {
            this.$router.push('/addsubscription')

          }
          if (this.form.role === 'Student'){
            this.$router.push('/showExam')

          }

        })


      }
      

  },

  methods: {
    // login() {
    //   this.$router.push('/register')
    // },
    // login() {
    //   this.$router.push('/login')
    // }

  }
  
}
</script>
<style>
.admin-block {
  max-width:100% ;
  height: 730px !important;
  background-color: whitesmoke;
  /* padding: 20px 0px 0px 0px; */
  border-style: solid;
  /* box-shadow: lightslategray; */
  border-color: black;
}
img {
  width:70%!important;
  height: 500px!important;
  padding-top: -190px;
  /* padding: auto; */

}

h1 {
  font-size: 100px;
  color: rgb(51, 130, 141) !important;
  text-align: center;
  margin-top: 20px;
  
  
}
button {
  max-width: 40% !important;
}
/* h2 {
  font-size: 3vh;
  color: rgb(51, 130, 141);
  margin-top: 1px;
  padding: 0px;
  text-align: center;
} */
.login-text{
color: blue;
  font-size: larger;
  font-weight: bold;
  text-align:center
}

</style>