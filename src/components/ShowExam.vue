<template>
<div>
<!-- <button @click="start">Start?</button> -->
<p style="color:steelblue;font-size:55px;position: fixed;top: 48%;left: 15%;transform: translate(-50%, -50%);opacity:0.3;transform: rotate(-45deg)">{{mail}}</p>
<iframe v-bind:src="link"  width="640" height="1491" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

<!-- <img v-watermark v-bind:src="link" mode= "bottomright"
  textBaseline= "middle"
  font= "15px Arial"
  fillStyle= "white"
  content= "@vuescript.com"
  rotate= 30> -->
</div>
</template>


<script>
// import Vue from 'vue'
// import router from '../router'
import firebase from "firebase";
import { projectFirestore } from '../firebase/config'
// import plugin from '@serializedowen/vue-img-watermark'

// import plugin from '@serializedowen/vue-img-watermark'
//  Vue.use(plugin)
export default {
    name: 'showExam',
    // props:['mail'],
    
    // components:{ plugin },
    
    data() {
        return{
            link:'',
            mail:'',
            userRole:''
        }
    },

    async beforeCreate(){
        let user = firebase.auth().currentUser
         await projectFirestore.collection('User').doc(user.uid).get().then((value) =>{
      console.log(value.data().userRole)
      this.userRole=value.data().userRole
      
    }
    )
    this.mail=user.email
    console.log(this.userRole)
await projectFirestore.collection('DailyExamLink').doc(this.userRole).get().then((value) =>{
    console.log(value.data().Link)
    this.link=value.data().Link
    console.log(this.Link)

})
    },
    // created() {
    //     console.log(this.$route.params.mail)
    //         this.mail = this.$route.params.mail;
    //     },
    // methods:{
    //     start() {
    //         console.log('hii')
    //         projectFirestore.collection('DailyExamLink').doc('Links').get().then((respose) => {
    //             this.link=respose.data().Link
    //             console.log(this.link)
    //             return this.link
                
    //         })
    //         console.log(this.link)
            // window.open(`${this.link}?uid=${this.uid}`, '_blank')


//             let routeData = this.$router.resolve({name: 'routeName', query: {data: "someData"}});
// window.open(routeData.href, 'https://www.vuescript.com/custom-watermarks/');
 
        }
//     }


// }
</script>

<style scoped>
.exam{
    background-image:url('../assets/p3.png'); 
   -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh !important;
    
}

 button {
    color: royalblue;
    background-color: white;
    border: black !important;
    border-bottom-width: initial;
    height: 70px !important;
    width: 50px !important;
    text-align: center;
    
}
/* .mark {
    writing-mode: "bottomright";
  justify-content: "middle";
  font: "15px Arial";
  fill: "white";
  content: "@vuescript.com";
  rotate: 30
} */
p{margin:0}

div:after{
    /* content: "DRAFT"; */
    color: steelblue;
    font-size: 120px;
    /* text-align: center; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity:0.1
}

</style>