<template>
<section>
      <div class="uploadvideo">
      <div class="container">
      <h1>Videos</h1>
      <form @submit.prevent="Submit">
          <div class="form-group">
          <label style='margin-right: 50px'>Subject:</label>
          <select v-model="subject" :style="{height: '30px'}">
          <option value="Biology" >Biology</option>
          <option value="Chemistry" >Chemistry</option>
          <option value="Physics" >Physics</option>
           <option value="இரசாயனவியல்" >இரசாயனவியல்</option>
          <option value="பௌதிகவியல்" >பௌதிகவியல்</option>
          <option value="உயிரியல்" >உயிரியல் </option>
          </select>
          </div>
        <div class="form-group">
          <label for="duration">Duration:</label>
          <input type="text" id="duration" v-model="duration">
          </div>
          <div class="form-group">
          <label style='margin-right: 50px'>Level:</label>
          <select v-model="level" :style="{height: '30px'}">
          <option value="Beginners" >Beginners</option>
          <option value="Intermediate" >Intermediate</option>
          <option value="Advanced" >Advanced</option>
          </select>
          </div>
          <div class="form-group">
          <label for="link">Link:</label>
          <input type="url" id="link" v-model="link">
          </div>
          <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title">
          </div>
           <div class="form-group">
          <label for="text">Text:</label>
          <input type="text" id="text" v-model="text">
          </div>
           <div class="form-group">
          <label for="thumbnail">Thumbnail:</label>
          <input type="url" id="thumbnail" v-model="thumbnail">
          </div>
    <button :disabled="link.length===0 || duration.length===0 || thumbnail.length === 0 || text.length === 0 || level.length === 0 ||title.length === 0 " type="submit" style='margin-top: 50px'>Upload</button>
   </form>
      </div>
      </div>
</section>
</template>

<script>
import { projectFirestore } from '../firebase/config'
// import firebase from "firebase";
// import router from '../router'

// import RegisterForm from './Register.vue'
export default {
    name : 'upload video',
    //props: ['role'],
// created() {
//             this.role = this.$route.params.id;
//         },
data() {
        return {
        title:'',
        link:'',
        level: 'Beginners',
        duration:'',
        text:'',
        thumbnail:'',
        subject:''
        //id: '',

    }
    },
    methods : {
        async Submit() {
            console.log('hiii')
            let newvideo= {
      'title': this.title,
      'url': this.link,
      'level': this.level,
      'length': this.duration,
      'text': this.text,
      'thumbnail': this.thumbnail,
     
      }
      //console.log(this.subject)
      //console.log(this.subtopic)
    projectFirestore.collection('Videos').doc(this.subject).collection(this.subject).add(newvideo)
    console.log('questions submitted')
   
    this.title= '',
    this.link= '',
    this.level= 'Beginners',
    this.duration= '',
    this.text= '',
    this.thumbnail= ''
            

        },
        
    }

}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
  min-width: 70% !important;
  
}
section {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column; 
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: rgb(94, 45, 94) solid !important;
  box-shadow: 0px 0px 20px #14021233;
  border-radius: 8px;
  background-color: rgb(237, 233, 243) !important;
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e ;
}
.form-group input,
.form-group textarea {
  width : 100%;
  height: 40px;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
button {
  width: 100% !important;
  border: inherit;
  background-color:rgb(145, 188, 241);
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}
h1 {
    color: #000;
}

</style>