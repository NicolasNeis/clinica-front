<template>
    <v-card width="100%" height="100%" color="white" class="mx-auto" style="border-radius: 10px">
        <div class="d-flex justify-center pa-3" style="background-color: #ecf0f1; font-size: 30px">
            <v-btn icon="mdi-arrow-left" variant="text" class="position-absolute" style="left: 20px;"
                @click="$router.go(-1)"></v-btn>
            {{ !appointment.id ? "Cadastro Apontamento" : "Visualização Apontamento" }}
        </div>
        <div class="mx-16">
            <v-autocomplete label="Médico" class="mt-10 mb-n3" variant="outlined" :items="lstDoctor" item-title="name"
                item-value="id" v-model="appointment.idDoctor"></v-autocomplete>
            <v-autocomplete label="Paciente" class="mb-n3" variant="outlined" :items="lstPatient" item-title="name"
                item-value="id" v-model="appointment.idPatient"></v-autocomplete>

            <v-text-field label="Data do atendimento" type="datetime-local" variant="outlined"
                v-model="appointment.appointmentDate"></v-text-field>

            <div class="w-100 d-flex">
                <v-spacer></v-spacer>
                <v-btn style="border-radius: 13px" class="" color="#58AF9B" flat @click="save()">
                    {{ routeId ? "Atualizar Apontamento" : "Cadastrar Apontamento" }}
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from 'vuex';

export default defineComponent({
    name: "AppointmentForm",
    data: () => ({
        routeId: null,
        menu: false,
        date: null
    }),
    computed: {
        ...mapState('appointment', ['appointment']),
        ...mapState('appointment', ['lstAppointment']),
        ...mapState('doctor', ['lstDoctor']),
        ...mapState('patient', ['lstPatient']),
        ...mapState('user', ['lstUsers']),
    },
    methods: {
        ...mapActions('appointment', ['addAppointment']),
        ...mapActions('appointment', ['updateAppointment']),
        ...mapActions('appointment', ['getAppointment']),
        ...mapActions('doctor', ['listAllDoctor']),
        ...mapActions('patient', ['listAllPatient']),
        ...mapActions('user', ['listAllEmployee']),
        async save() {
            let response;

            const usuario = localStorage.getItem('usuario');

            const idUsuario = this.lstUsers.filter(item => item.userName == usuario)[0].id;

            this.appointment.idUser = idUsuario

            if (!this.routeId)
                response = await this.addAppointment();
            else
                response = await this.updateAppointment();
            if (response)
                this.$router.push({ name: 'home' });
        },
    },
    async mounted() {
        await this.listAllDoctor();
        await this.listAllPatient();
        await this.listAllEmployee();
        if (this.$router.currentRoute.value.params.appointmentId) {
            this.routeId = this.$router.currentRoute.value.params.appointmentId
            await this.getAppointment(this.$router.currentRoute.value.params.appointmentId);
        }
    }
});
</script>

<style scoped></style>