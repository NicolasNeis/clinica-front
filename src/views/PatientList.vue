<template>
    <v-card width="100%" height="100%" color="white" class="mx-auto" elevation="0">
        <div class="d-flex pa-3">
            <v-spacer></v-spacer>
            <v-btn 
                @click="this.$router.push({ name: 'patient' });">
                <v-icon>mdi-plus</v-icon>
                Novo Paciente
            </v-btn>
        </div>
        <v-data-table :items="lstPatient" :headers="headers">
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon class="me-2" size="small" @click="$router.push(`/patient/${item.id}`)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deletePatient(item.id)">
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
    name: "PatientList",
    data: () => ({
        headers: [
            { title: 'ID', value: 'id' },
            { title: 'Nome', value: 'name' },
            { title: 'Data de Nascimento', key: 'dateOfBirth' },
            { title: 'Telefone', value: 'phone' },
            { title: 'CPF', value: 'cpf' },
            { title: 'Ações', key: 'actions', sortable: false },
        ]
    }),
    computed: {
        ...mapState('patient', ['lstPatient']),
    },
    methods: {
        ...mapActions('patient', ['listAllPatient']),
        ...mapActions('patient', ['deletePatient']),

    },
    async mounted() {
        await this.listAllPatient();
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