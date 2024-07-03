import axiosConfig from "@/plugins/axios.js";

export default {
    namespaced: true,
    state: {
        doctor: {},
        lstDoctor: [],
    },
    getters: {
    },
    actions: {
        async listAll(store) {
            try {
                const response = await axiosConfig.get(`api/doctor`)

                store.state.lstDoctor = response.data
                return response.data
            } catch (error) {
                return
            }
        },
        async addDoctor(store) {
            try {
                await axiosConfig.post(`/api/doctor/`, store.state.doctor)
                store.state.doctor = {}
                return true
            } catch (error) {
                return false
            }
        },
        async updateDoctor(store) {
            try {
                await axiosConfig.put(`/api/doctor/${store.state.doctor.id}`, store.state.doctor)
                store.state.doctor = {}
                return true
            } catch (error) {
                return false
            }
        },
        async getDoctor(store, id) {
            try {
                const response = await axiosConfig.get(`/api/doctor/${id}`)
                store.state.doctor = response.data
                return true
            } catch (error) {
                return false
            }
        },
        async deleteDoctor(store, id) {
            try {
                await axiosConfig.delete(`/api/doctor/${id}`)
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