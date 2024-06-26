import axiosConfig from "@/plugins/axios.js";

export default {
  namespaced: true,
  state: {
    user: {
      userName: null,
      password: null,
      role: 0
    },
    isAuthenticated: false,
    isRegister: false,
    lstUsers: [],
  },
  getters: {},
  actions: {
    async listAll(store) {
      try {
        const response = await axiosConfig.get(`api/employee`)

        store.state.lstUsers = response.data
        return response
      } catch (error) {
        return false
      }
    },
    async login(store) {
      try {
        const response = await axiosConfig.post(`/api/login`, { userName: store.state.userName, password: store.state.password })
        localStorage.setItem('token', response.data.token)
        axiosConfig.defaults.headers.common["authorization"] = response.data.token;
        store.state.isAuthenticated = true
        return true
      }
      catch (error) {
        return false
      }

    },
    async getEmployee(store, id) {
      try {
        const response = await axiosConfig.get(`/api/employee/${id}`)
        store.state.user = response.data
        return true
      } catch (error) {
        return false
      }
    },
    async signIn(store) {
      try {
        const response = await axiosConfig.post('/register', { userName: store.state.userName, password: store.state.password })
        localStorage.setItem('token', response.data.token)
        store.state.isAuthenticated = true
        return true
      }
      catch (error) {
        return false
      }
    },
    async logout(store) {
      localStorage.removeItem('token')
      store.state.isAuthenticated = false
    },
    async addEmployee(store) {
      try {
        await axiosConfig.post(`/api/employee/`, store.state.user)
        store.state.user = {
          userName: null,
          password: null,
          role: 0
        }
        return true
      } catch (error) {
        return false
      }
    },
    async updateEmployee(store) {
      try {
        await axiosConfig.put(`/api/employee/${store.state.user.id}`, store.state.user)
        store.state.user = {
          userName: null,
          password: null,
          role: 0
        }
        return true
      } catch (error) {
        return false
      }
    },
    async deleteEmployee(store, id) {
      try {
        await axiosConfig.delete(`/api/employee/${id}`)
        await store.dispatch("listAll")
        return true
      } catch (error) {
        return false
      }
    },
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  }
};