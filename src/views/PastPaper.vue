<template>
  <section>
      <div class="ModelPaper">
      <div class="container">
        <h4> Past Paper </h4>
          <form @submit.prevent="handleSubmit">
          <div class="form-group">
          <label style='margin-right: 50px'>Subject:</label>
          <select v-model="subject" :style="{height: '30px'}">
          <option value="Biology" >Biology</option>
          <option value="Chemistry" >Chemistry</option>
          <option value="Physics" >Physics</option>
          <option value="இரசாயனவியல்" >இரசாயனவியல்</option>
          <option value="பௌதிகவியல்" >பௌதிகவியல்</option>
          <option value="உயிரியல் " >உயிரியல் </option>
          <option value="Biology(NEET)" >Biology(NEET)</option>
          <option value="Chemistry(NEET)" >Chemistry(NEET)</option>
          <option value="Physics(NEET)" >Physics(NEET)</option>
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
              <template v-else-if="subject === 'Physics(NEET)'">
                 <option v-for="n in subtopicsList.Physics_NEET" :key="n">{{n}}</option>
               </template>
                             <template v-else-if="subject === 'Chemistry(NEET)'">
                 <option v-for="n in subtopicsList.Chemistry_NEET" :key="n">{{n}}</option>
               </template> 

              <template v-else-if="subject === 'Biology(NEET)'">
                 <option v-for="n in subtopicsList.Biology_NEET" :key="n">{{n}}</option>
               </template> 


            </select>
          </div>
      
      <hr style='margin-bottom: 50px'>
              <div class="form-group">
                  <label for="question">Question text:</label>
                  <input type="text" id="question" v-model="question">
              </div>
              <div class="form-group">
                <label for="question">Question Img:</label>
                <img :src="previewImage" class="uploading-image" />
                <input type="file" accept="image/jpeg" @change=uploadImage style='margin-bottom: 50px'>
              </div>
              <div class="form-group">
                  <label for="question"  style='margin-right: 12px'>answer type:</label>
                  <select v-model="anstype" :style="{height: '30px'}">
                  <option value="text">text</option>
                  <option value="image">image</option>
              </select>
              </div>
              
              
              <div class="form-group">
                <template v-if="anstype === 'text'">
                  <label for="answer1">Answer 1:</label>
                  <input type="text" id="answer 1" v-model="answer1">
                  <label for="answer2">Answer 2:</label>
                  <input type="text" id="answer 2" v-model="answer2">
                  <label for="answer3">Answer 3:</label>
                  <input type="text" id="answer 3" v-model="answer3">
                  <label for="answer4">Answer 4:</label>
                  <input type="text" id="answer 4" v-model="answer4">
                  <label for="answer5">Answer 5:</label>
                  <input type="text" id="answer 5" v-model="answer5">
                </template>
                <template v-else>
                  <label for="answer1">Answer 1:</label>
                   <img :src="previewImage1" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage1 >
                   <label for="answer1">Answer 2:</label>
                   <img :src="previewImage2" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage2 >
                   <label for="answer1">Answer 3:</label>
                   <img :src="previewImage3" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage3 >
                   <label for="answer1">Answer 4:</label>
                   <img :src="previewImage4" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage4 >
                   <label for="answer1">Answer 5:</label>
                   <img :src="previewImage5" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage5 >
                </template>
              </div>

              <div class="form-group">
                <template v-if="anstype === 'text'">
                  <label for="correctanswer">Correct Answer:</label>
                  <select v-model="correctanswer" :style="{height: '30px'}">
                  <option v-bind:value="answer1">{{answer1}}</option>
                  <option v-bind:value="answer2">{{answer2}}</option>
                  <option v-bind:value="answer3">{{answer3}}</option>
                  <option v-bind:value="answer4">{{answer4}}</option>
                  <option v-bind:value="answer5">{{answer5}}</option>
                  <option value="allcorrect">All correct</option>
                  </select>
                </template>
                <template v-else>
                  <label for="correctanswer">Correct Answer:</label>
                  <select v-model="correctanswer" :style="{height: '30px'}">
                  <option v-bind:value="answer1">Answer 1</option>
                  <option v-bind:value="answer2">Answer 2</option>
                  <option v-bind:value="answer3">Answer 3</option>
                  <option v-bind:value="answer4">Answer 4</option>
                  <option v-bind:value="answer5">Answer 5</option>
                  <option value="allcorrect">All correct</option>
                  </select>
                </template>
                
              </div>
              

              <button :disabled="question.length === 0 || subject.length === 0 || subtopic.length === 0  || answer1.length ===0 || answer2.length === 0 || answer3.length === 0 || answer4.length === 0 || answer5.length === 0 || correctanswer.length === 0 " type="submit" style='margin-top: 50px'>Upload</button>
          </form>
      </div>

      <div>
          <p>Subject: {{ subject }}</p>
          <!--p>Medium: {{ medium }}</p-->
          <p>Subtopic: {{ subtopic }}</p>
          <p>Question: {{ question }}</p>
          <p>Answer 1: {{ answer1 }}</p>
          <p>Answer 2: {{ answer2 }}</p>
          <p>Answer 3: {{ answer3 }}</p>
          <p>Answer 4: {{ answer4 }}</p>
          <p>Answer 5: {{ answer5 }}</p>
          <p>Correct Answer: {{ correctanswer }}</p>
          <p>Question Number: {{ this.questionid }}</p>
      </div>
      </div>
  </section>
</template>

<script>
import { mainModule } from 'process';
import { projectFirestore, projectStorage } from '../firebase/config'



export default {
    name: 'ModelPaper',
data() {
    return {
      examlist : [],
      posts: [],
      errors: [],
      object : {},
        question: '',
        questionimg: '',
        answer1: '',
        answer2: ' ',
        answer3: '',
        answer4: '',
        answer5: '',
        correctanswer: '',
        subject: '',
        subtopic: '',
        previewImage:null,
        previewImage1:null,
        previewImage2:null,
        previewImage3:null,
        previewImage4:null,
        previewImage5:null,
        previewImage6:null,
        test: '',
        anstype: 'text',
        medium: 'Tamil',
        questionid: '0',
        list: '',
        prefix : '',
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
  ],
  Biology_NEET:['Diversity of Living Organisms','Structural Organisation in Plants and Animals','Cell:Structure and Function','Plant Physiology','Human Physiology','Reproduction','Genetics and Evolution','Biology and Human Welfare','Biotechnology and its Applications','Ecology and Environment'],
  Physics_NEET:['Physical-world and Measurement','Kinematics','Laws of Motion','Work,Energy and Power','Motion of System of Particles and Rigid Body','Gravitation','Properties of Bulk Matter','Thermodynamics','Behaviour of Perfect Gas and Kinetic Theory','Oscillation and Waves','Electrostatics','Current Electricity','Magnetic Effect of Current and Magnetism','Electromagnetic Induction and Alternating Current','Electromagnetic Waves','Optics','Dual Nature of Matter and Radiation','Atoms and Nuclei','Electronic Devices'],
  Chemistry_NEET:['Basic Concepts of Chemistry','Structure of Atom','Classification of Elements  and Periodicity in Properties','Chemical Bonding and Molecular Structure','States of Matter:Gases and Liquids','Thermodynamics','Equilibrium','Redox Reactions','Hydrogen','s-Block Elements','Some p-Block Elements','Organic Chemistry','Solid State','Solutions','Electrochemistry','Chemical Kinetics','Surface Chemistry','Isolation of Elements','p-block elements','d- and f-Block Elements','Coordination Compounds','Haloalkanes and Haloarenes','Alcohols, Phenols, and Ethers','Aldehydes, Ketones and Carboxylic Acids']
 
  }
        



    }
},

  
methods: {
  uploadImage(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject}/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage = url
        console.log(this.previewImage)
        

        })
      }      
    );
                };
                    
            },
             uploadImage1(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage1 = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject} Answer/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage1 = url
        this.answer1 = this.previewImage1

        })
      }      
    );
                };
                    
            },
             uploadImage2(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage2 = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject} Answer/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage2 = url
        this.answer2 = this.previewImage2

        })
      }      
    );
                };
                    
            },
             uploadImage3(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage3 = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject} Answer/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage3 = url
        this.answer3 = this.previewImage3

        })
      }      
    );
                };
                    
            },
             uploadImage4(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage4 = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject} Answer/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage4 = url
        this.answer4 = this.previewImage4

        })
      }      
    );
                };
                    
            },
             uploadImage5(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage5 = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject} Answer/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage5 = url
        this.answer5 = this.previewImage5

        })
      }      
    );
                };
                    
            },
             uploadImage6(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage6 = e.target.result;
                const storageRef = projectStorage.ref(`Question_Image/${this.subject} Answer/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage6 = url
        this.correctanswer = this.previewImage6

        })
      }      
    );
                };
                    
            },
            
  
 async handleSubmit() {
    await projectFirestore.collection('Subjects').doc(this.subject).get().then((response) => {

             this.allLastQuestions=response.data().pastLastQuestion

             
             //this.$set('response', response.data)
           }).catch((e) => {
             console.log(e)
           })
               //console.log(this.allLastQuestions)
               console.log(this.question)

for (var lastQues in this.allLastQuestions) {
      //console.log(this.allLastQuestions[lastQues])
      //console.log(this.subtopic)

  if (this.allLastQuestions[lastQues].id === this.subtopic) {
    this.questionid=this.allLastQuestions[lastQues].value+1
    console.log(this.questionid)
    this.allLastQuestions.splice(lastQues,1)
    console.log(this.allLastQuestions)
    this.allLastQuestions.push({id:this.subtopic,value:this.questionid})

    console.log(this.allLastQuestions)


  }
}

await projectFirestore.collection('Subjects').doc(this.subject).update({pastLastQuestion:this.allLastQuestions}).catch((e) =>{
  console.log(e)
   projectFirestore.collection('Subjects').doc(this.subject).set({pastLastQuestion:this.allLastQuestions})
})


    if (this.previewImage === null) {
      this.previewImage='none'

    }
    
    let newQuestion = {
      'Question': this.question,
      'Image': this.previewImage,
      'Answers': [
       this.answer1,
       this.answer2,
       this.answer3,
       this.answer4,
       this.answer5],
      'Correct Answer': this.correctanswer,
      'Explanation': ['available'],
      'KeyWords': [],
      'CorrectKeyWords': [],
      'Link': '',
      'Question Number': parseInt(this.questionid),
     
      }
      //console.log(this.subject)
      //console.log(this.subtopic)
    projectFirestore.collection('Subjects').doc(this.subject).collection(this.subtopic+'_Past Paper').doc('QuestionNumber_'+this.questionid).set(newQuestion)
    console.log('questions submitted')
   
    this.question= '',
    this.questionimg= '',
    this.answer1= '',
    this.answer2= '',
    this.answer3= '',
    this.answer4= '',
    this.answer5= '',
    this.correctanswer= '',
    this.subtopic= '',
    this.previewImage=null,
    this.previewImage1=null,
    this.previewImage2=null,
    this.previewImage3=null,
    this.previewImage4=null,
    this.previewImage5=null,
    this.previewImage6=null,
    this.test= '',
    this.anstype= ''
    //this.questionid++
    



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
.uploading-image{
     display:flex;
     width: 10px;
     height: auto;

     }
h4 {
  color: rgb(155, 13, 72);
  font-size:large;
}
.hr {
  height: 1px;
  background-color: black;
  border: none;
 
}

</style>