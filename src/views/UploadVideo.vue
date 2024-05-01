<template>
  <button @click="show">view all</button>
  <div class= "container" v-if="screenshotLength">
    <h3 class="p-3 text-center">screenshot event details</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" i in screenshots" :key="i">
                    <td>{{i.name}}</td>
                    <td>{{i.mail}}</td>
                    <td>{{i.time}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
// import firebase from "firebase";
import { projectFirestore } from '../firebase/config'
// import { constants } from 'crypto';
// import { userInfo } from 'os';
export default {
    name: 'ScreenShots',
    data() {
    return {
        // screenshots: [],
        screenshotLength: false,
        screenshots:[]
        
    }
    },
    methods: {
     async show() { await projectFirestore.collection('ScreenShotEvents').doc('modified').get().then((response) => {

             const details = response.data().data
             console.log(details)
             console.log(this.screenshotLength)
            //  this.screenshots=details
            const screenshots=[]
            details.forEach(function (detail) {
            //  const detail=details[0]
             console.log(detail)
             console.log(detail.email)
             console.log(detail.time)
             const userid = detail.uid 
             console.log(userid)
            //  const uid = detail.uid
            //  detail.uid = firebase.auth().currentUser.uid
            //  var user = firebase.auth().currentUser
            //  if (detail.uid === firebase.auth().currentUser.uid) {
            //    console.log('hii')
            
             projectFirestore.collection('User').doc(userid).get().then(val => {
             const userdetails =val.data()
             const username = userdetails.userName
             console.log(username)
             screenshots.push({name:username,mail:detail.email,time:detail.time})
            //  return username
             
             
             })
             
            //  console.log(username)
             
            //    const user = projectFirestore.collection('User').get().then((response) => {
            //    const uesrdata = response.data().userInfo
               
            //    console.log(uesrdata)
             
             
            // //  const name = response.data(userInfo.userName)
            // //  console.log(name)
            //  })
             
            //  console.log(user)

            //  }
             
            //  console.log(user)
            //  projectFirestore.collection('User').doc(firebase.auth().currentUser.uid).get()
            //  console.log(this.screenshotLength)
            //  console.log(this.screenshots)
             
             console.log(screenshots)
             console.log('hiiiiii')
             return screenshots
            //  return screenshots
             
            //  console.log(this.screenshots)
            })
            
            console.log(screenshots)
            this.screenshots = screenshots
            console.log(this.screenshots)
            console.log(screenshots)
            this.screenshotLength= true

             
             

             
           }).catch((e) => {
             console.log(e)
           })
              //  console.log(this.screenshots)
}
}
}
</script>

<style>
button {
  width: 50% !important;
  border: inherit;
  background-color:rgb(145, 188, 241);
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}
.block {
  width:95%;
  height: auto;
  position:initial;
  top: 30% !important;
  left: 2%;
  margin: auto;
  padding: 0 100px;
}
.card{

  margin: auto;
  background: #faf6f6;
  border-radius: 20px;
  transition: all .3s;
}

</style>