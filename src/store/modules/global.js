export default {
    namedspaced: true,
    state: {
        snackbar:{
			show: false,
            loading: false,
			text: "",
			color: "red",
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