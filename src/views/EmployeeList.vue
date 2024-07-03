<template>
    <v-card width="100%" height="100%" color="white" class="mx-auto" elevation="0">
        <div class="d-flex pa-3">
            <v-spacer></v-spacer>
            <v-btn 
                @click="this.$router.push({ name: 'employee' });">
                <v-icon>mdi-plus</v-icon>
                Novo Funcionário
            </v-btn>
        </div>
        <v-data-table :items="lstUsers" :headers="headers">
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon class="me-2" size="small" @click="$router.push(`/employee/${item.id}`)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteEmployee(item.id)">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
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
            { title: 'Ações', key: 'actions', sortable: false },
        ]
    }),
    computed: {
        ...mapState('user', ['lstUsers']),
    },
    methods: {
        ...mapActions('user', ['listAll']),
        ...mapActions('user', ['deleteEmployee']),
    },
    async mounted() {
        await this.listAll();
    }
});
</script>

<style scoped>

</style>