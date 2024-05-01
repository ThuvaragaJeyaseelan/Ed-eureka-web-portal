<template>
<section>
      <div class="tutorial">
      <div class="container">
  <h1>Tutorials</h1>
   <form @submit.prevent="Submit">
          <div class="form-group">
          <label style='margin-right: 50px'>Subject:</label>
          <select v-model="subject" :style="{height: '30px'}">
          <option value="Biology" >Biology</option>
          <option value="Chemistry" >Chemistry</option>
          <option value="Physics" >Physics</option>
          <option value="இரசாயனவியல்" >இரசாயனவியல்</option>
          <option value="பௌதிகவியல்" >பௌதிகவியல்</option>
          <option value="உயிரியல் " >உயிரியல் </option>
          </select>
          </div>
          <div class="form-group">
          <label  style='margin-right: 37px'>Subtopic:</label>
           <select v-model="subtopic" :style="{height: '30px'}" @change="getLastQuestion">
             <template v-if="subject === 'Biology'">
                 <option v-for="n in subtopicsList.Biology" :key="n">{{n}}</option>
               </template>
               <template v-else-if="subject === 'உயிரியல் '">
                 <option v-for="n in subtopicsList.உயிரியல் " :key="n">{{n}}</option>
               </template>
             <template v-else-if="subject === 'Chemistry'">
                 <option v-for="n in subtopicsList.Chemistry" :key="n">{{n}}</option>
               </template>
                <template v-else-if="subject === 'இரசாயனவியல்'">
                 <option v-for="n in subtopicsList.இரசாயனவியல்" :key="n">{{n}}</option>
               </template>  
              <template v-else-if="subject === 'Physics'">
                 <option v-for="n in subtopicsList.Physics" :key="n">{{n}}</option>
               </template>
               <template v-else-if="subject === 'பௌதிகவியல்'">
                 <option v-for="n in subtopicsList.பௌதிகவியல்" :key="n">{{n}}</option>
               </template> 
            </select>
          </div>
          <div class="form-group">
                <label for="question">File:</label>
                <img :src="previewImage" class="uploading-image" />
                <input type="file" accept="image/jpeg" @change=uploadImage style='margin-bottom: 50px' required>
             </div> 
              <!-- <div v-bind:role="role"> --> 
                            
                            <!-- </div> -->
            <button :disabled=" subject.length === 0 || subtopic.length === 0  " type="submit" style='margin-top: 50px'>Upload</button>
                            

   </form>
   <h1>{{role}}</h1>
      </div>
      </div>
</section>
</template>

<script>
import { projectFirestore, projectStorage } from '../firebase/config'
import firebase from "firebase";
import router from '../router'

// import RegisterForm from './Register.vue'
export default {
    name : 'tutorials',
    //props: ['role'],
created() {
            this.role = this.$route.params.id;
        },
data() {
        return {
        subject:'',
        subtopic:'',
        previewImage: null,
        role:'',
        //id: '',
                subtopicsList: { Biology: ['Applied Biology','Micro Biology','Environmental Biology','Molecular Biology and Recombinant DNA Technology','Genetics','Animal form and function','Plant form and function','Evolution and Diversity of Organisms','Chemical and Cellular Basis of Life','Introduction to Biology'] ,
                         Chemistry:  [
    'Industrial Chemistry',
    'Gases',
    'Environmental Chemistry',
    'Physical Chemistry',
    'Organic Chemistry',
    'Inorganic Chemistry',
    'Thermo Chemistry',
    'Basic Chemistry',
    'General Chemistry'
  ],
                          Physics:[
    'Matter and Radiation',
    'Mechanical Properties of Matter',
    'Electronics',
    'Current Electricity',
    'Magnetic Field',
    'Electric Field',
    'Gravitational Field',
    'Thermal Physics',
    'Oscillation and waves',
    'Mechanics',
    'Measurement',
    'Units and Measurements'
  ],
  பௌதிகவியல்: [
    'சடமும் கதிர்ப்பும்',
    'சடத்தின் பொறியியல் இயல்புகள்',
    'இலத்திரனியல்',
    'ஓட்டமின்னியல்',
    'காந்தப்புலம்',
    'நிலைமின்புலம்',
    'ஈர்ப்புப்புலம்',
    'வெப்பப் பௌதிகவியல்',
    'அலைவுகளும் அலைகளும்',
    'பொறியியல்',
    'அளவீடு',
    'அலகு பரிமாணம்'
  ],
  இரசாயனவியல்:  [
    'சூழல் இரசாயனம்',
    'கைத்தொழில் இரசாயனம்',
    'சமநிலை இரசாயனம்',
    'சேதன இரசாயனம்',
    'அசேதன இரசாயனம்',
    'சடப்பொருளின் வாயுநிலை',
    'சக்தியியல் இரசாயனம்',
    'அடிப்படை இரசாயனம்',
    'அணுக் கட்டமைப்பு',
  ],
  உயிரியல் : [
    'உயிரியலுக்கான அறிமுகம் ',
 'உயிரின் இரசாயன மற்றும் கல அடிப்படை' ,
 'அங்கிகளின் கூர்ப்பும் பல்வகைமையும்', 
 'தாவர அமைப்பும் தொழிலும் ',
 'விலங்கு அமைப்பும் தொழிலும் ',
'பிறப்புரிமையியல்' ,
' மூலக்கூற்று உயிரியலும் மீளச்சேர்க்கைக்குரிய தொழில்நுட்பமும்',
'சுற்றாடல் உயிரியல் ',
'நுண்ணுயிரினவியல்',
'பிரயோக உயிரியல் '
  ]
 
  }

    }
    },
    methods : {
            async Submit() {
            console.log('hiii')
            const newvideo = this.previewImage
    // projectFirestore.collection('Tutorials').doc(this.subject).collection(this.subtopic).add(newvideo)
    console.log('tutorial uploaded')
   
    this.subject= '',
    this.subtopic= '',
    this.previewImage= ''
            

        },
        
       async uploadImage(e) {
            
  //               const image = e.target.files[0];
  //               const reader = new FileReader();
  //               reader.readAsDataURL(image);
  //               reader.onload = e =>{
  //                   this.previewImage = e.target.result;
  //               const storageRef = projectStorage.ref(`Question_Image/${this.subject}/${image.name}`).put(image);
  // storageRef.on(`state_changed`,snapshot=>{
  // this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  //   }, error=>{console.log(error.message)},
  // ()=>{this.uploadValue=100;
  //     storageRef.snapshot.ref.getDownloadURL().then((url)=>{
  //       this.previewImage = url
  //       console.log(this.previewImage)
        
        
        

//         })
//       }      
//     );
//                 };
                    
           }
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
  border: rgb(94, 45, 94) solid;
  box-shadow: 0px 0px 20px #14021233;
  border-radius: 8px;
  background-color: rgb(237, 233, 243);
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;
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