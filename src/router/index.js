import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import PatientForm from '../views/PatientForm.vue'
import DoctorForm from '../views/DoctorForm.vue'
import PatientList from '../views/PatientList.vue'
import DoctorList from '../views/DoctorList.vue'
import EmployeeList from '../views/EmployeeList.vue'
import EmployeeForm from '../views/EmployeeForm.vue'
import SnackBar from '@/views/SnackBar.vue'
import AppointmentForm from '../views/AppointmentForm.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView, SnackBar
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView, SnackBar
  },
  {
    path: '/patient/:patientId?',
    name: 'patient',
    component: PatientForm, SnackBar
  },
  {
    path: '/doctor/:doctorId?',
    name: 'doctor',
    component: DoctorForm, SnackBar
  },
  {
    path: '/patients',
    name: 'patients',
    component: PatientList, SnackBar
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorList, SnackBar
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeeList, SnackBar
  },
  {
    path: '/employee/:employeeId?',
    name: 'employee',
    component: EmployeeForm, SnackBar
  },
  {
    path: '/appointment/:appointmentId?',
    name: 'appointment',
    component: AppointmentForm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next()
    return
  }

  if (localStorage.getItem("token") == null) {
    next({
      path: "/login",
      params: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
});



export default router
