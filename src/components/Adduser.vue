<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Add User</div>
          <div class="card-body">
            <!-- <div v-if="error" class="alert alert-danger">{{error}}</div> -->
            <form action="#" @submit.prevent="submit">

                <!-- <div class="form-group row">
                <label for="fullName" class="col-md-4 col-form-label text-md-right">Full Name</label>

                <div class="col-md-6">
                  <input
                    id="fullname"
                    type="text"
                    class="form-control"
                    name="fullname"
                    required
                    v-model="form.fullname"
                  />
                </div>
              </div> -->

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
<p>{{ error }}</p>
<h8>{{ confirmMessage }}</h8>


              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Upload</button>
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
export default {
    name:'AddUser',
    data() {
        return{
           form: {
        email: "",
        // fullname: "",
        },
      error :''
    ,
    confirmMessage:''
      
        }
    },
    //  async beforeCreate(){
    //     let user = firebase.auth().currentUser
    //     console.log(user.uid)
    //      await projectFirestore.collection('User').doc(user.uid).get().then((value) =>{
    //   console.log(value.data().userRole)
    //   this.userRole=value.data().userRole
     
    // }
    // )},
    
    methods:{
        async submit(){
            let newUserdetails = {
                'name':this.form.fullname,
                'email':this.form.email
            }
            // console.log(newUserdetails)
            //             console.log(this.form.email)
            // console.log(this.userRole)
            let i = 0


            await projectFirestore.collection('User').where('email', '==' ,this.form.email).get().then((value) =>{

              value.docs.forEach((element) => {
              var userdetails = element.data()
              var uid = userdetails.uid
               projectFirestore.collection('User').doc(uid).update({userRole : 'Kugan Sir', userType : 'Student'})
               i++
               this.error=''
               


              })
            })
if (i === 0 ){
  this.error='This email adderss is not registered in our app'
  this.confirmMessage=''
}
else{
  this.confirmMessage='User added successfully'
  this.error=''
}
            console.log(i)


        }
    }

}
</script>

<style>
p {
  color: brown;
}
h8{
  color: green;
}

</style>