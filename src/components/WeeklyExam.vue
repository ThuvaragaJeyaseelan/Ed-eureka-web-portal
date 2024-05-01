<template>
<section>
      <div class="examlink">
      <div class="container">
      <h1>Daily Exam Link</h1>
      <form @submit.prevent="Submit">

        <div class="form-group">
          <label for="link">Link:</label>
          <input type="url" id="link" v-model="link" required>
          </div>

           <div class="form-group">
          <label for="allowed">Allowed Attempts:</label>
          <input type="number" id="allowed" v-model="allowed" required>
          </div>

          <div class="form-group">
          <label style='margin-right: 63px'>Batch:</label>
          <select v-model="batch" required>
          <option value="21">2021</option>
          <option value="22">2022</option>
          </select>
          </div>

          <div class="form-group">
          <label for="description">description:</label>
          <input type="text" id="description" v-model="description" required>
          </div>

          <div class="form-group">
          <label for="duration">Duration(Mins):</label>
          <input type="number" id="duration" v-model="duration" required>
          </div>

          <div class="form-group">
          <label for="examName">examName:</label>
          <input type="text" id="examName" v-model="examName" required>
          </div>

          <div class="form-group">
          <label for="startTime">startTime:</label>
              <date-picker v-model="startTime" lang="en" type="datetime" format =  "YYYY-MM_DD " width = "500" placeholder = "Select Date TIme"></date-picker>
              <span>
                <label for="Hour">Hour:</label>
              <select v-model="startHour" required>
                  <option v-for=" n in hours" :key="n">{{n}}</option>
              </select>
              <label for="Min">Min:</label>
              <select v-model="startMin" required>
                  <option v-for=" n in minutes" :key="n">{{n}}</option>
              </select>
            </span>
            <label for="am/pm">am/pm:</label>
            <select v-model="startAmPm" required>
                  <option v-for=" n in timeAmPm" :key="n">{{n}}</option>
              </select>
            </div>


           <div class="form-group">
          <label for="finishTime">finishTime:</label>
           <date-picker v-model="finishTime" lang="en" type="datetime" format =  "YYYY-MM_DD" width = "500" placeholder = "Select Date TIme"></date-picker>
            <!-- <time-picker v-model="finishTime" lang="en" type="datetime" format =  "HH:mm:ss a" width = "50" placeholder = "Select Date TIme"></time-picker> -->
            <span>
                              <label for="Hour">Hour:</label>
              <select v-model="finishHour" required>
                  <option v-for=" n in hours" :key="n">{{n}}</option>
              </select>
                            <label for="Min">Min:</label>
              <select v-model="finishMin" required>
                  <option v-for=" n in minutes" :key="n">{{n}}</option>
              </select>
            </span>
                        <label for="am/pm">am/pm:</label>
            <select v-model="finishAmPm" required>
                  <option v-for=" n in timeAmPm" :key="n">{{n}}</option>
              </select>
              </div>


           

          <!-- <input type="text" id="finishTime" v-model="finishTime" required> -->
          

           <div class="form-group">
             <label for="medium">Medium:</label>
              <select v-model="medium" required>
                  <option v-for=" n in mediums" :key="n">{{n}}</option>
              </select>
            </div>
            
          <!-- <div class="form-group">
          <label for="time">time:</label>
          <input type="text" id="time" v-model="time" required>
          </div> -->

          <div class="form-group">
          <label for="topic">topic:</label>
          <input type="text" id="topic" v-model="topic" required>
          </div>

          <div class="form-group">
          <label for="watermarkNeeded">watermarkNeeded:</label>
              <select v-model="watermarkNeeded" required>
                  <option value="true" type="boolean" >Yes</option>
                  <option value="false" type="boolean">No</option>
              </select>         
              </div>

          <div>
    <button type="submit" style='margin-top: 50px'>Upload</button>
          </div>
          <!-- <p>{{ watermarkNeeded }}</p> -->
    <router-link :to="{name: 'weeklyExam'}">Weekly Exam?</router-link>

   </form>
      </div>
      </div>
</section>
</template>

<script>
import firebase from "firebase";
import DatePicker from 'vue3-datepicker';
import TimePicker from 'vue3-timepicker';
import { projectFirestore } from '../firebase/config'
export default {
    name : 'weeklyExam',
    components : {
    DatePicker,TimePicker
  },
  async beforeCreate() {
    console.log('hi')
    const h = []
    for (let i  = 1; i<13; i++) {
      h.push(i)
     
    
    }
        const m = []

     for (let i  = 1; i<61; i++) {
      m.push(i)
     
    
    }
    const user=firebase.auth().currentUser
    let userRole = ''
    console.log(user.uid)

    await projectFirestore.collection('User').doc(user.uid).get().then((value) =>{
      console.log(value.data().userRole)
      userRole=value.data().userRole
      console.log(userRole)
    }
    )
    console.log(userRole)
    await projectFirestore.collection('subscriptions').doc(userRole).get().then((value) =>{
      console.log(value.data().batch)
      this.batch= value.data().batch
    }
    )
    // console.log(h)
    // console.log(m)
    this.hours=h
    this.minutes=m
    console.log(this.hours)
    console.log(this.minutes)




  },

data() {
        return {
         
        link:'https://www.youtube.com/watch?v=tpZMgSXgrtc',
        allowed:'45',
        batch:'2021',
        selectedBatch:'sada',
        description:'hghghjjfdf',
        duration:'50',
        examName:'fdhfghgf',
        finishTime:'',
        startTime:'',
        mediums:['Tamil','English'],
        medium:'Tamil',
        subtopics:[],
        hours:[],
        minutes:[],
        topic:'dfgfdgfd',
        watermarkNeeded:'Yes',
        finishMin:'23',
        finishHour:'11',
        timeAmPm:['am','pm'],
        finishAmPm:'am',
        startMin:'6',
        startHour:'3',
        startAmPm:'am'
    }
    },
    methods : {
      
        async Submit() {
          console.log(this.finishTime + this.finishHour + this.finishMin+this.finishAmPm)
          console.log(this.startTime + this.startHour + this.startMin+this.startAmPm)
//Thu Aug 19 2021 00:00:00 GMT+0530 (India Standard Time)1011pm
const timedetails = [{month:'Jan',value:'01'},{month:'Feb',value:'02'},{month:'Mar',value:'03'},{month:'Apr',value:'04'},{month:'May',value:'05'},{month:'Jun',value:'06'},{month:'Jul',value:'07'},{month:'Aug',value:'08'},{month:'Sep',value:'09'},{month:'Oct',value:'10'},{month:'Nov',value:'11'},{month:'Dec',value:'12'}]
const startlst = this.startTime.toString().split(' ')
const aaa = startlst[1]
for (var data in timedetails) {
  console.log(data)
  console.log(data.month)
  console.log(startlst[1] === data.month)
  if (startlst[1] === timedetails[data].month){
    console.log(timedetails[data].value)
    if (this.startAmPm === 'am' && parseInt(this.startHour) !== 12) {
      if(this.startHour < 10  ) {
        this.startHour=0+this.startHour
      }
       if(this.startMin < 10  ) {
        this.startMin=0+this.startMin
      }
    console.log(startlst[2]+'-'+timedetails[data].value+'-'+startlst[3]+' '+this.startHour+':'+this.startMin+':00.000000')
    console.log(0+this.startHour)
    console.log('hii')
    }
    else if (this.startAmPm === 'pm' && parseInt(this.startHour) !== 12) {
      this.startHour=parseInt(this.startHour)+12
      if(this.startHour < 10  ) {
        this.startHour=0+this.startHour
      }
       if(this.startMin < 10  ) {
        this.startMin=0+this.startMin
      }
    
    console.log(startlst[2]+'-'+timedetails[data].value+'-'+startlst[3]+' '+this.startHour+':'+this.startMin+':00.000000')

    }
    else if(this.startAmPm === 'am' && parseInt(this.startHour) === 12){
      this.startHour='0'
      let h=this.startHour
      this.startHour=h.repeat(1)
            if(this.startHour < 10  ) {
        this.startHour=0+this.startHour
      }
       if(this.startMin < 10  ) {
        this.startMin=0+this.startMin
      }
    console.log(startlst[2]+'-'+timedetails[data].value+'-'+startlst[3]+' '+this.startHour+':'+this.startMin+':00.000000')


    }
        else if(this.startAmPm === 'pm' && parseInt(this.startHour) === 12){
      this.startHour=12
            if(this.startHour < 10  ) {
        this.startHour=0+this.startHour
      }
       if(this.startMin < 10  ) {
        this.startMin=0+this.startMin
      }
    console.log(startlst[2]+'-'+timedetails[data].value+'-'+startlst[3]+' '+this.startHour+':'+this.startMin+':00.000000')


    }

  }

}
const finishlst = this.finishTime.toString().split(' ')
// const aaa = finishlst[1]
for (var data in timedetails) {
  console.log(data)
  console.log(data.month)
  console.log(finishlst[1] === data.month)
  if (finishlst[1] === timedetails[data].month){
    console.log(timedetails[data].value)
    if (this.finishAmPm === 'am' && parseInt(this.finishHour) !== 12) {
      if(this.finishHour < 10  ) {
        this.finishHour=0+this.finishHour
      }
       if(this.finishMin < 10  ) {
        this.finishMin=0+this.finishMin
      }
    console.log(finishlst[2]+'-'+timedetails[data].value+'-'+finishlst[3]+' '+this.finishHour+':'+this.finishMin+':00.000000')
    console.log(0+this.finishHour)
    console.log('hii')
    }
    else if (this.finishAmPm === 'pm' && parseInt(this.finishHour) !== 12) {
      this.finishHour=parseInt(this.finishHour)+12
      if(this.finishHour < 10  ) {
        this.finishHour=0+this.finishHour
      }
       if(this.finishMin < 10  ) {
        this.finishMin=0+this.finishMin
      }
    
    console.log(finishlst[2]+'-'+timedetails[data].value+'-'+finishlst[3]+' '+this.finishHour+':'+this.finishMin+':00.000000')

    }
    else if(this.finishAmPm === 'am' && parseInt(this.finishHour) === 12){
      this.finishHour='0'
      let h=this.finishHour
      this.finishHour=h.repeat(1)
            if(this.finishHour < 10  ) {
        this.finishHour=0+this.finishHour
      }
       if(this.finishMin < 10  ) {
        this.finishMin=0+this.finishMin
      }
    console.log(finishlst[2]+'-'+timedetails[data].value+'-'+finishlst[3]+' '+this.finishHour+':'+this.finishMin+':00.000000')


    }
        else if(this.finishAmPm === 'pm' && parseInt(this.finishHour) === 12){
      this.finishHour=12
            if(this.finishHour < 10  ) {
        this.finishHour=0+this.finishHour
      }
       if(this.finishMin < 10  ) {
        this.finishHour=0+this.finishHour
      }
    console.log(finishlst[2]+'-'+timedetails[data].value+'-'+finishlst[3]+' '+this.finishHour+':'+this.finishMin+':00.000000')


    }

  }
}

  

if (this.watermarkNeeded === 'true'){
  this.watermarkNeeded=true
}
else {
  this.watermarkNeeded=false
}
console.log(aaa)

console.log(timedetails.aaa)
           let newlink = {
             'Link': this.link,
             'allowed':parseInt(this.allowed),
             'batch':this.batch+' '+this.medium,
             'description': this.description,
             'duration':parseInt(this.duration),
             'examName':this.examName,
             'finishTime':this.finishTime,
             'medium':this.medium,
             'startTime':this.startTime,
             'subtopics':[],
               'time':'',
               'topic':this.topic,
               'waterMarkerNeeded':this.watermarkNeeded
             

      }
           projectFirestore.collection('DailyExamLink').doc('Links').update(newlink)
           console.log('submitted')
   
           this.link= ''
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