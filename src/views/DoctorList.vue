<template>
    <v-card width="100%" height="100%" color="white" class="mx-auto" elevation="0">
        <div class="d-flex pa-3">
            <v-spacer></v-spacer>
            <v-btn 
                @click="this.$router.push({ name: 'doctor' });">
                <v-icon>mdi-plus</v-icon>
                Novo Médico
            </v-btn>
        </div>
        <v-data-table :items="lstDoctor" :headers="headers">
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon class="me-2" size="small" @click="$router.push(`/doctor/${item.id}`)">
                    mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteDoctor(item.id)">
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
    name: "DoctorList",
    data: () => ({
        headers: [
            { title: 'ID', value: 'id' },
            { title: 'Nome', value: 'name' },
            { title: 'CRM', value: 'crm' },
            { title: 'Especialização', value: 'specialization' },
            { title: 'Ações', key: 'actions', sortable: false },
        ]
    }),
    computed: {
        ...mapState('doctor', ['lstDoctor']),
    },
    methods: {
        ...mapActions('doctor', ['listAllDoctor']),
        ...mapActions('doctor', ['deleteDoctor']),

    },
    async mounted() {
        await this.listAllDoctor();
    }
});
</script>

<style scoped>

</style>