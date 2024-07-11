import { createStore } from 'vuex'
import user from './modules/user'
import doctor from './modules/doctor'
import patient from './modules/patient'
import global from './modules/global'
import appointment from './modules/appointment'

export default createStore({
    modules: {
        user,
        doctor,
        patient,
        global,
        appointment,
    },
})