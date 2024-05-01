<template>
  <!-- <button @click="show">view all</button> -->
  <div class= "container" v-if="screenshotLength">
    <h3 class="p-3 text-center">screenshot event details</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" i in screenshots" :key="i">
                    <td>{{i.mail}}</td>
                    <td>{{i.time}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
export default {
    name: 'ScreenShots',
    data() {
    return {
        // screenshots: [],
        screenshotLength: false,
        screenshots:[]
        
    }
    },
    
     async beforeCreate() { await projectFirestore.collection('ScreenShotEvents').doc('modified').get().then((response) => {

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
            //  console.log(this.screenshotLength)
            //  console.log(this.screenshots)
             screenshots.push({mail:detail.email,time:detail.time})
             console.log(screenshots)
             return screenshots
            //  return screenshots
             
            //  console.log(this.screenshots)
            })
            this.screenshots = screenshots
            console.log(this.screenshots)
            this.screenshotLength= true

             
             

             
           }).catch((e) => {
             console.log(e)
           })
              //  console.log(this.screenshots)
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