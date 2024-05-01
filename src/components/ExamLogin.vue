<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Exam Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              

              <div class="form-group row">
                <label for="fullname" class="col-md-4 col-form-label text-md-right">Full Name</label>

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

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
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
import { constants } from 'crypto';
// import { response } from 'express';

export default {
   //props: ['role'],
    name : 'ExamLogin',
  data() {
    return {
      form: {
        fullname: "",
        // role:"",
        email: "",
        // password: "",
      },
      details: "",
      error: null,
      userName:'',
      users:[{name: 'Muthulingam Thanoraj' , mail:'muthulingamthanoraj@gmail.com'},
      {name:'20051',mail:'sivansivan1008@gmail.com'},
      {name:'20084',mail:'k.nirosh1020@gmail.com'},
      {name:'2735',mail:'sathiyeswaranio@gmail.com'},
      {name:'2738',mail:'zdzainyziya@gmail.com'},
      {name:'9823',mail:'saajidhasabir@gmail.com'},
      {name:'9961 Fathima Rasna',mail:'rasnafathima2001@gmail.com'},
      {name:'Abdul Kaiyoom Samly Shefa',mail:'aksamly073@gmail.com'},
      {name:'Abdul wahid waasil',mail:'awwaasil2000@gmail.com'},
      {name:'ABIRAMY EHANATHAN',mail:'abiramieganathan@gmail.com'},
      {name:'Abisothman',mail:'abishothman2002@gmail.com'},
      {name:'AHAMED FAHIM RIFHATH HIMA',mail:'faabzal@gmail.com'},
      {name:'Ahkashan',mail:'yasotharanahkashan@gmail.com'},
      {name:'Akshana pulendran',mail:'akshanapulendran@gmail.com'},
      {name:'amaritha saravanaa',mail:'lavanjali.kamal@gmail.com'},
      {name:'AMSHAVY EESWARAN',mail:'eesan1968@gmail.com'},
      {name:'Angani Sooriyakumaran',mail:'Thatanicaangani2412@gmail.com'},
      {name:'Angelin Albert',mail:'angelinalista2001@gmail.com'},
      {name:'Anista',mail:'kailasapathy0@gmail.com'},
      {name:'Anushiya Karunakaran',mail:'kyalaraci@gmail.com'},
      {name:'Anushka',mail:'anuanushka2021@gmail.com'},
      {name:'aravinthan',mail:'paviparththi03@gmail.com'},
      {name:'Aravinthan',mail:'kuganaravinthan@gmail.com'},
      {name:'ARAVINTHAN ARRATHIKASARMA',mail:'aravinthaninuvil@gmail.com'},
      {name:'Arulmoli Harshan',mail:'drjanakiarul@yahoo.com'},
      {name:'Arulnathan Thuvarakan',mail:'ssllarulnathan84@gmail.com'}
      

      ]
    };
  },
  methods: {
    async submit() {
      console.log(this.form.email.trim().toLowerCase())
      await projectFirestore.collection('subscriptions').doc('New Science Hall').collection('webUsers').doc(this.form.email.toLowerCase()).get().then((element) => {

          console.log(element.data().name)
          this.userName =element.data().name

        }).catch((e) =>{
          console.log(e)
        })
        if(this.userName.length > 0){
           this.$router.replace({
    name: 'showExam',
    params: {
        mail: this.form.mail
    }
})
          
        }
        else {
          alert('Invalid Email Address')
        }
      
//       console.log(this.users)
//       const userdetails = this.users
//       console.log(userdetails)
//       Object.keys(userdetails).forEach((value) => {
//         if (this.form.email === userdetails[value].mail) {
//           console.log('hiiii')
//         this.$router.replace({
//     name: 'showExam',
//     params: {
//         mail: this.form.mail
//     }
// })
//       }

      
     
      // if (this.form.email === mail) {
      //   console.log('hiiii')
      //   this.$router.push('/showExam')
      // }
      
        
        // await projectFirestore.collection('Subjects').doc(this.subject).get().then((response) => {

        //      const user_exam = response.data()
        //      console.log(user_exam)
        //     //  const userdetails =val.data()
        //     //  const username = userdetails.userName
        //     //  console.log(username)                 
        //      })

    
  // })
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