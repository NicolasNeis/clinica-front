<template>
    <div class="container">
        <div class="d-flex justify-left w-100">
            <v-btn @click="$router.push('home')" style="border-radius: 13px" width="100" class="ml-10 mb-4 mt-n4" flat>
                Menu
            </v-btn>
            <v-btn style="border-radius: 13px" class="ml-10 mb-4 mt-n4" flat
                @click="this.$router.push({ name: 'employee' });">
                Novo Funcionário
            </v-btn>
        </div>
        <v-card width="95%" height="85%" color="white" class="mx-auto">
            <v-data-table :items="lstUsers" :headers="headers"></v-data-table>
        </v-card>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from 'vuex';

export default defineComponent({
    name: "EmployeeList",
    data: () => ({
        headers: [
            { title: 'Código', value: 'id' },
            { title: 'Nome', value: 'userName' },
            {
                title: 'Administrador',
                key: 'role',
                value: item => item.role == 1 ? "Sim" : "Não",
            },
        ]
    }),
    computed: {
        ...mapState('user', ['lstUsers']),
    },
    methods: {
        ...mapActions('user', ['listAll']),
    },
    async mounted() {
        await this.listAll();
    }
});
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #58af9b;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>