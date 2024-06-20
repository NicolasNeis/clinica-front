import axiosConfig from "@/plugins/axios.js";

export default {
  namespaced: true,
  state: {
    user: {
      userName: null,
      password: null
    },
    isAuthenticated: false,
    isRegister: false
  },
  getters: {},
  actions: {
    async login({ commit, state }) { 
      try {
        const response = await axiosConfig.post(`/api/login`, {
          userName: state.user.userName,
          password: state.user.password,
          role: "admin",
          id: 1
        });
        localStorage.setItem('token', response.data.token);
        commit('setAuthenticated', true);
        return response;
      } catch (error) {
        return false;
      }
    },
    async signIn({ commit, state }) {
      try {
        const response = await axiosConfig.post('/register', {
          userName: state.user.userName,
          password: state.user.password
        });
        localStorage.setItem('token', response.data.token);
        commit('setAuthenticated', true);
        return true;
      } catch (error) {
        return false;
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('setAuthenticated', false);
    }
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  }
};