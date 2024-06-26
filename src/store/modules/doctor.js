

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
    getters: {
    },
    actions: {
        async listAll(store) {
            setTimeout(() => {
                try {
                    // const response = await axios.get(`${defaultUrl}/doctors`)
                    // return response
    
                    store.state.employees = [
                        { id: 1, userName: 'João', password: 'senha1', role: 0 },
                        { id: 2, userName: 'Maria', password: 'senha2', role: 1 },
                        { id: 3, userName: 'Pedro', password: 'senha3', role: 0 },
                        { id: 4, userName: 'Ana', password: 'senha4', role: 1 },
                        { id: 5, userName: 'Carlos', password: 'senha5', role: 0 },
                        { id: 6, userName: 'Mariana', password: 'senha6', role: 1 },
                        { id: 7, userName: 'Lucas', password: 'senha7', role: 0 },
                        { id: 8, userName: 'Fernanda', password: 'senha8', role: 1 },
                        { id: 9, userName: 'Paulo', password: 'senha9', role: 0 },
                        { id: 10, userName: 'Juliana', password: 'senha10', role: 1 },
                        { id: 11, userName: 'Gustavo', password: 'senha11', role: 0 },
                        { id: 12, userName: 'Camila', password: 'senha12', role: 1 },
                        { id: 13, userName: 'Rafael', password: 'senha13', role: 0 },
                        { id: 14, userName: 'Patrícia', password: 'senha14', role: 1 },
                        { id: 15, userName: 'Rodrigo', password: 'senha15', role: 0 },
                        { id: 16, userName: 'Bruna', password: 'senha16', role: 1 },
                        { id: 17, userName: 'Fábio', password: 'senha17', role: 0 },
                        { id: 18, userName: 'Larissa', password: 'senha18', role: 1 },
                        { id: 19, userName: 'Vinícius', password: 'senha19', role: 0 },
                        { id: 20, userName: 'Renata', password: 'senha20', role: 1 },
                        { id: 21, userName: 'Felipe', password: 'senha21', role: 0 },
                        { id: 22, userName: 'Daniela', password: 'senha22', role: 1 },
                        { id: 23, userName: 'André', password: 'senha23', role: 0 },
                        { id: 24, userName: 'Simone', password: 'senha24', role: 1 },
                        { id: 25, userName: 'Thiago', password: 'senha25', role: 0 },
                        { id: 26, userName: 'Roberta', password: 'senha26', role: 1 },
                        { id: 27, userName: 'Ricardo', password: 'senha27', role: 0 },
                        { id: 28, userName: 'Gabriela', password: 'senha28', role: 1 }
                    ]
                    
                } catch (error) {
                    return false
                }
            }, (4000));
        },

    },
    mutations: {
    }
}