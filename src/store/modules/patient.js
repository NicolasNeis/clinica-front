import axiosConfig from "@/plugins/axios.js";

export default {
    namespaced: true,
    state: {
        patient: {},
        lstPatient: [],
    },
    getters: {
    },
    actions: {
        async listAll(store) {
            try {
                const response = await axiosConfig.get(`api/patient`)

                const lstPatient = response.data.map(el => {
                    el.dateOfBirth = new Date(el.dateOfBirth).toLocaleDateString('pt-BR')
                    return el
                })

                store.state.lstPatient = lstPatient
                return response
            } catch (error) {
                return false
            }
        },
        async addPatient(store) {
            try {
                store.state.patient.dateOfBirth = new Date()
                await axiosConfig.post(`/api/patient/`, store.state.patient)
                store.state.patient = {}
                return true
            } catch (error) {
                return false
            }
        },
        async updatePatient(store) {
            try {
                await axiosConfig.put(`/api/patient/${store.state.patient.id}`, store.state.patient)
                store.state.patient = {}
                return true
            } catch (error) {
                return false
            }
        },
        async getPatient(store, id) {
            try {
                const response = await axiosConfig.get(`/api/patient/${id}`)
                store.state.patient = response.data
                return true
            } catch (error) {
                return false
            }
        },
        async deletePatient(store, id) {
            try {
                await axiosConfig.delete(`/api/patient/${id}`)
                await store.dispatch("listAll")
                return true
            } catch (error) {
                return false
            }
        },
    },
    mutations: {
    }
}