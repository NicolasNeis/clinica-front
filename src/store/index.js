import { createStore } from 'vuex'
import user from './modules/user'
import doctor from './modules/doctor'
import patient from './modules/patient'

export default createStore({
    modules: {
        user,
        doctor,
        patient,
    },
})