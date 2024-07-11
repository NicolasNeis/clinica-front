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
        async listAllDoctor(store) {
            try {
                const response = await axiosConfig.get(`api/doctor`)

                store.state.lstDoctor = response.data
                return response.data
            } catch (error) {
                store.dispatch("global/showSnackBar", {
                    show: true,
                    text: error,
                    color: "red",
                    loading: true
                }, {root: true})
            }
        },
        async addDoctor(store) {
            try {
                await axiosConfig.post(`/api/doctor/`, store.state.doctor)
                store.state.doctor = {}
                return true
            } catch (error) {
                store.dispatch("global/showSnackBar", {
                    show: true,
                    text: error,
                    color: "red",
                    loading: true
                }, {root: true})
            }
        },
        async updateDoctor(store) {
            try {
                await axiosConfig.put(`/api/doctor/${store.state.doctor.id}`, store.state.doctor)
                store.state.doctor = {}
                return true
            } catch (error) {
                store.dispatch("global/showSnackBar", {
                    show: true,
                    text: error,
                    color: "red",
                    loading: true
                }, {root: true})
            }
        },
        async getDoctor(store, id) {
            try {
                const response = await axiosConfig.get(`/api/doctor/${id}`)
                store.state.doctor = response.data
                return true
            } catch (error) {
                store.dispatch("global/showSnackBar", {
                    show: true,
                    text: error,
                    color: "red",
                    loading: true
                }, {root: true})
            }
        },
        async deleteDoctor(store, id) {
            try {
                await axiosConfig.delete(`/api/doctor/${id}`)
                await store.dispatch("listAllDoctor")
                return true
            } catch (error) {
                store.dispatch("global/showSnackBar", {
                    show: true,
                    text: error,
                    color: "red",
                    loading: true
                }, {root: true})
            }
        },
    },
    mutations: {
    }
}