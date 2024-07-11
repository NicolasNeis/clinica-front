import axiosConfig from "@/plugins/axios.js";

function getFormattedTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function addMinutesToDate(date, minutes) {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
  }
  

export default {
    namespaced: true,
    state: {
        appointment: {},
        lstAppointment: [],
    },
    getters: {
        getEvents(state) {
            let formattedTime;
            let date;
            let endDate
            return state.lstAppointment.map(ap => {
                date = new Date(ap.appointmentDate);
                formattedTime = getFormattedTime(date);
                endDate = addMinutesToDate(date, 30);
                return {
                    title: "Consulta" + " - " + formattedTime,
                    start: new Date(ap.appointmentDate),
                    end: endDate,
                    color: "green",
                    allDay: false,
                }
            })
        }
    },
    actions: {
        async listAllAppointment(store) {
            try {
                const response = await axiosConfig.get(`api/appointment`)

                store.state.lstAppointment = response.data
                return response.data
            } catch (error) {
                return
            }
        },
        async addAppointment(store) {
            try {
                await axiosConfig.post(`/api/appointment`, store.state.appointment)
                store.state.appointment = {}
                return true
            } catch (error) {
                return false
            }
        },
        async updateAppointment(store) {
            try {
                await axiosConfig.put(`/api/appointment/${store.state.appointment.id}`, store.state.appointment)
                store.state.appointment = {}
                return true
            } catch (error) {
                return false
            }
        },
        async getAppointment(store, id) {
            try {
                const response = await axiosConfig.get(`/api/appointment/${id}`)
                store.state.appointment = response.data
                return true
            } catch (error) {
                return false
            }
        },
        async deleteAppointment(store, id) {
            try {
                await axiosConfig.delete(`/api/appointment/${id}`)
                await store.dispatch("listAllAppointment")
                return true
            } catch (error) {
                return false
            }
        },
    },
    mutations: {
    }
}