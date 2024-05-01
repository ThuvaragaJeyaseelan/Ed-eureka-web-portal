// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PastPaper from '../views/PastPaper.vue'
import ModelPaper from '../views/ModelPaper.vue'
import ScreenShots from '../views/ScreenShots.vue'
import QuestionForm from '../views/QuestionForm.vue'
import LoginForm from '../components/Login.vue'
import RegisterForm from '../components/Register.vue'
import UploadVideo from '../components/UploadVideo.vue'
import UploadVideoStu from '../components/UploadVideoStu.vue'
import QuestionAdder from '../components/QuestionAdder.vue'
import SubscriptionAdder from '../components/SubscriptionAdder.vue'
import UploadTutorials from '../components/Tutorials.vue'
import Examlink from '../components/ExamLink.vue'
import ExamLogin from '../components/ExamLogin.vue'
import ShowExam from '../components/ShowExam.vue'
import WeeklyExam from '../components/WeeklyExam.vue'
import AddUser from '../components/Adduser.vue'

// import Exam from '../components/Adduser.vue'






// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/modelpapers',
    name: 'ModelPaper',
    component: ModelPaper
  },
  {
    path: '/pastpapers',
    name: 'PastPaper',
    component: PastPaper
  },
  {
    path: '/screenshots',
    name: 'ScreenShots',
    component: ScreenShots
  },
  {
    path: '/questionform',
    name: 'Question Form',
    component: QuestionForm
  },
  {
    path: '/register',
    name: 'register form ',
    component: RegisterForm
  },
  {
    path: '/login',
    name: 'login form',
    component: LoginForm
  },
  {
    path: '/videosupload',
    name: 'upload video',
    component: UploadVideo
  },
  {
    path: '/videosupload/stu',
    name: 'uploadvideo-stu',
    component: UploadVideoStu
  },
  {
    path: '/addquestion',
    name: 'question adder ',
    component: QuestionAdder
  },
  {
    path: '/addsubscription',
    name: 'subscription adder',
    component: SubscriptionAdder
  },
  {
    path: '/tutorialsupload',
    name: 'tutorials',
    component: UploadTutorials
  },
  {
    path: '/upload link',
    name: 'upload link',
    component: Examlink
  },
  {
    path: '/Exam Login',
    name: 'ExamLogin',
    component: ExamLogin
  },
  {
    path: '/showExam',
    name: 'showExam',
    component: ShowExam,
    props: true
  
  },
  {
    path: '/weeklyExam',
    name: 'weeklyExam',
    component: WeeklyExam
  },
  {
    path: '/AddUser',
    name: 'AddUser',
    component: AddUser
  },
  // {
  //   path: '/Exam',
  //   name: 'exam',
  //   component: Exam
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
