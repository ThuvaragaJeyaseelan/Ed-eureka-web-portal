<template>
  <section>
      <div class="container">
          <h5>Question Form</h5>
          <form @submit.prevent="handleSubmit">
          <div class="form-group">
          <label style='margin-right: 50px'>Subject:</label>
          <select v-model="subject" :style="{height: '30px'}">
          <option value="Biology" >Biology</option>
          <option value="Chemistry" >Chemistry</option>
          <option value="Physics" >Physics</option>
          </select>
          </div>
          <div class="form-group">
          <label style='margin-right: 63px'>Batch:</label>
          <select v-model="batch" :style="{height: '30px'}">
          <option value="21">2021</option>
          <option value="22">2022</option>
          </select>
          </div>
          <div class="form-group">
          <label style='margin-right: 63px'>Paper Type:</label>
          <select v-model="papertype" :style="{height: '30px'}">
          <option value="past">Past Paper</option>
          <option value="model">Model Paper</option>
          </select>
          </div>
          <div class="form-group">
           <label style='margin-right: 41px'>Medium:</label>
          <select v-model="medium" :style="{height: '30px'}">
          <option value="Tamil">Tamil</option>
          <option value="English">English</option>
          </select>
          </div>
          <div class="form-group">
          <label style='margin-right: 8px'>Subscription:</label>
          <select v-model="subscription" :style="{height: '30px'}">
          <option value="New Science Hall">New Science Hall</option>
          </select>
          </div>
          <div class="form-group">
          <label for="date">Exam date and Time:</label>
          <input type="text" id="date" v-model="date">
          </div>
          <div class="form-group">
          <label for="description">Exam Description:</label>
          <input type="text"  v-model="description" style='margin-bottom: 50px'>
          </div>
          <hr style='margin-bottom: 50px'>

          <div class="form-group">
          <label  style='margin-right: 37px'>Subtopic:</label>
           <select v-model="subtopic" :style="{height: '30px'}">
             <template v-if="subject === 'Biology'">
               <template v-if="medium === 'English'">
                 <option v-for="n in subtopicsList.Biology" :key="n">{{n}}</option>
               </template>
                <template v-if="medium === 'Tamil'">
                 <option v-for="n in subtopicsList.உயிரியல்" :key="n">{{n}}</option>
               </template>  
             </template>
             <template v-else-if="subject === 'Chemistry'">
                <template v-if="medium === 'English'">
                 <option v-for="n in subtopicsList.Chemistry" :key="n">{{n}}</option>
               </template>
                <template v-if="medium === 'Tamil'">
                 <option v-for="n in subtopicsList.இரசாயனவியல்" :key="n">{{n}}</option>
               </template>  
             </template>
             <template v-else>
                <template v-if="medium === 'English'">
                 <option v-for="n in subtopicsList.Physics" :key="n">{{n}}</option>
               </template>
                <template v-if="medium === 'Tamil'">
                 <option v-for="n in subtopicsList.பௌதிகவியல்" :key="n">{{n}}</option>
               </template> 
             </template> 
            </select>
          </div>
           <!--select v-model="Subtopics">
           
           </select-->
            <!--select v-model="Subtopics">
            
            </select-->
              <div class="form-group">
                  <label for="questionid">Question Number:</label>
                  <input type="number" id="question" v-model="questionid">
              </div>
      
      
              <div class="form-group">
                  <label for="question">Question text:</label>
                  <input type="text" id="question" v-model="question">
              </div>
              <template v-if="question.includes('/')">
              
              </template>
              <div class="form-group">
                <label for="question">Question Img:</label>
                <!--input type="text" v-model="questionimg"-->
                <img :src="previewImage" class="uploading-image" />
                <input type="file" accept="image/jpeg" @change=uploadImage style='margin-bottom: 50px'>
                <!--input type="submit"-->
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
                  <!--input type="text" v-model="ansimg1"-->
                   <img :src="previewImage1" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage1 >
                   <label for="answer1">Answer 2:</label>
                   <!--input type="text" v-model="ansimg2"-->
                   <img :src="previewImage2" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage2 >
                   <label for="answer1">Answer 3:</label>
                   <!--input type="text" v-model="ansimg3"-->
                   <img :src="previewImage3" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage3 >
                   <label for="answer1">Answer 4:</label>
                   <!--input type="text" v-model="ansimg4"-->
                   <img :src="previewImage4" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage4 >
                   <label for="answer1">Answer 5:</label>
                   <!--input type="text" v-model="ansimg5"-->
                   <img :src="previewImage5" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage5 >
                </template>
              </div>
              <!--div class="form-group">
                <label for="answer">Answer Img:</label>
                <input type="text" v-model="answerimg">
                <img :src="previewImage1" class="uploading-image" />
                <input type="file" accept="image/jpeg" @change=uploadImage1 >
                <input type="submit">
              </div-->

              <div class="form-group">
                <template v-if="anstype === 'text'">
                  <label for="correctanswer">Correct Answer:</label>
                  <select v-model="correctanswer" :style="{height: '30px'}">
                  <option v-bind:value="answer1">{{answer1}}</option>
                  <option v-bind:value="answer2">{{answer2}}</option>
                  <option v-bind:value="answer3">{{answer3}}</option>
                  <option v-bind:value="answer4">{{answer4}}</option>
                  <option v-bind:value="answer5">{{answer5}}</option>
                  </select>
                  <!--label for="correctanswer">Correct Answer:</label>
                  <input type="text" id="correctanswer" v-model="correctanswer"-->
                </template>
                <template v-else>
                  <label for="correctanswer">Correct Answer:</label>
                  <select v-model="correctanswer" :style="{height: '30px'}">
                  <option v-bind:value="answer1">Answer 1</option>
                  <option v-bind:value="answer2">Answer 2</option>
                  <option v-bind:value="answer3">Answer 3</option>
                  <option v-bind:value="answer4">Answer 4</option>
                  <option v-bind:value="answer5">Answer 5</option>
                  </select>
                   <!--input type="text" v-model="questionimg">
                   <img :src="previewImage6" class="uploading-image" />
                   <input type="file" accept="image/jpeg" @change=uploadImage6-->
                </template>
                
              </div>
              

              <button :disabled="question.length === 0 || subject.length === 0 || subtopic.length === 0  || answer1.length ===0 || answer2.length === 0 || answer3.length === 0 || answer4.length === 0 || answer5.length === 0 || correctanswer.length === 0 " type="submit" style='margin-top: 50px'>Upload</button>
          </form>
      </div>

      <div>
          <p>Subject: {{ subject }}</p>
          <p>Batch: {{ batch }}</p>
          <p>Medium: {{ medium }}</p>
          <p>Subscription: {{ subscription }}</p>
          <p>Description: {{ description }}</p>
          <p>Date: {{ date }}</p>
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
  </section>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { mainModule } from 'process';
import { projectFirestore, projectStorage } from '../firebase/config'


export default {

  name :"Question Form",
   components: {
    Datepicker
  },
data() {
    return {
      examlist : [],
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
        batch: '21',
        medium: 'Tamil',
        subscription: '',
        date: '',
        questionid: '1',
        list: '',
        description: '',
        papertype: 'past',
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
    'அளவீடு'
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

methods: {
  uploadImage(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.previewImage = url
        

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
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
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
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
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
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
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
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
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
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
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
                    //console.log(this.previewImage);
                const storageRef = projectStorage.ref(`subscriptions/${this.subscription}/${this.batch}_${this.subject}/${image.name}`).put(image);
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
    //let list = this.question.toString()
    while (this.date.toString().includes('/')){
      this.date = this.date.replace('/','-')
      //console.log(this.date)

    }
    if (this.previewImage === null) {
      this.previewImage='none'

    }
    
    //const units = object.values(this.subtopicsList)
    let newQuestion = {
      'Question': this.question,
      'Image': this.previewImage,
      //'Answer Image': this.previewImage1,
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
      'Subtopic': this.subtopic
     // Subject: this.stream,
     // Subtopic: this.subtopic
      }
    //let subject = this.stream
    //let subtopic =  this.subtopic

    //projectFirestore.collection('subjects').add(subject)
    //projectFirestore.doc('subtopics').add(subtopic)
    //console.log(this.batch_this.date)
    
    //var examlist = []
    //var examObject = {}


    if (parseInt(this.questionid) === 1) {
      await projectFirestore.collection('Papers').doc(this.subscription).get().then(e => {
        var details = e.data()  
        //this.examlist = e.data()
        console.log(details.exams)
        console.log(this.examlist)
        var something = details.exams
      
        this.examlist = something
        console.log(this.examlist)

      }).catch((e)=> {
        console.log(e)
        this.examlist = []
    

      })
      let topic=this.subject
      let topicsList = []
      if (this.subject === 'Biology') {
        if (this.medium === 'English') {
          topicsList = this.subtopicsList.Biology

        }
        else {
          topicsList = this.subtopicsList.Biology
        }
    }
    else if (this.subject === 'Chemistry') {
        if (this.medium === 'English') {
          topicsList = this.subtopicsList.Chemistry

        }
        else {
          topicsList = this.subtopicsList.இரசாயனவியல்
        }
    }
    else  {
        if (this.medium === 'English') {
          topicsList = this.subtopicsList.Physics

        }
        else {
          topicsList = this.subtopicsList.பௌதிகவியல்
        }
    }
console.log('Hiii')
      let objectexam = {'batch': this.batch, 'description': this.description, 'examName': this.subscription+' '+this.subject , 'time': this.date, 'topic': this.subject, 'subtopics': topicsList, 'medium': this.medium}
      console.log(objectexam)
      console.log('test1')
      this.examlist.push(objectexam)
      console.log(this.examlist) //intha line 1 aa print panuthu
  
      projectFirestore.collection('Papers').doc(this.subscription).update({'exams': this.examlist})
      console.log(this.examlist)

    }
    projectFirestore.collection('Papers').doc(this.subscription).collection(this.batch.toString()+'_'+this.date.toString()+'_'+this.medium.toString()).doc('Question Number'+this.questionid).set(newQuestion)
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
    this.questionid++
    


    //projectStorage.ref().child('new').putFile(this.previewImage.path)
    
    //projectFirestore.collection('subjects').add(subject)
    //projectFirestore.collection('subtopics').add(subtopic)
    //projectFirestore.collection('newQuestions').add(newQuestion)

    

    //projectFirestore.subjects('subtopics').add(subtopic)
    //projectFirestore.subtopics('newQuestions').add(newQuestion)
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
  width: 100%;
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
.hr {
  height: 1px;
  background-color: black;
  border: none;
 
}
h5 {
  color: rgb(40, 94, 77);
  font-size:large;
}

</style>