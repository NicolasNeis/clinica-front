export default {
    namespaced: true,
    state: {
        snackbar:{
			show: false,
			text: "",
			color: "red",
            loading: false,
            textColor: "white"
		},
    },
    mutations: {
        showSnackBar(state, payload){
			state.snackbar = payload
		},
    },
    actions: {
        showSnackBar(store, payload){
			store.commit("showSnackBar", payload)
		},
    },

}