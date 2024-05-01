<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Log in</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
               
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  
                  <button type="submit" class="btn btn-primary">Log in</button>
                  <!-- <div v-if="error" >
                    {{ error.message }}
                  </div> -->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import { projectFirestore } from '../firebase/config'
// import { response } from 'express';

export default {
   //props: ['role'],
    name : 'register form',
  data() {
    return {
      form: {
        //name: "",
        role:"",
        email: "",
        password: "",
      },
      details: "",
      error: null
    };
  },
  methods: {
    async submit() {
      
      const profile = await firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then((value) => {
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
          console.log(this.details)
        })
        console.log(firebase.auth().currentUser.uid)

      }).catch((e) =>{
        console.log(e.message)
        alert(e.message)
        this.form.email=''
        this.form.password=''

      }
      )
      

    //   projectFirestore
    //     .auth()
    //     .createUserWithEmailAndPassword(this.form.email, this.form.password)
    //     .then(data => {
    //       data.user
    //         .updateProfile({
    //           displayName: this.form.name
    //         })
    //         .then(() => {});
    //     })
    //     .catch(err => {
    //       this.error = err.message;
    //     });
     }
  }
};
</script>
<style>
/* .card-header {
  font-size: 2vh;
} */
.container {
  min-height: 50% !important;
  top: 10%;
}
</style>