<template>
  <v-card width="100%" height="100%" color="white" class="mx-auto" style="border-radius: 10px">
    <div class="d-flex justify-center pa-3" style="background-color: #ecf0f1; font-size: 30px">
      <v-btn icon="mdi-arrow-left" variant="text" class="position-absolute" style="left: 20px;" @click="$router.go(-1)"></v-btn>
      {{ !doctor.id ? "Cadastro Médico" : "Visualização Médico" }}
    </div>
    <div class="mx-16">
      <v-text-field label="Nome Completo" class="mt-10 mb-n3" variant="outlined" density="compact"></v-text-field>
      <v-text-field label="CRM" class="mb-n3" variant="outlined" density="compact"></v-text-field>
      <v-text-field label="Planos de saúde atendidos" class="mb-n3" variant="outlined"
        density="compact"></v-text-field>
      <v-text-field label="Telefone" class="mb-n3" variant="outlined" density="compact"></v-text-field>
      <v-text-field label="Horário de atendimento" class="mb-n3" variant="outlined" density="compact"></v-text-field>
      <v-text-field label="Endereço" class="mb-n3" variant="outlined" density="compact"></v-text-field>
      <v-text-field label="Clínica" class="mb-n3" variant="outlined" density="compact"></v-text-field>
      <v-text-field label="Especialidade" class="" variant="outlined" density="compact"></v-text-field>
      <div class="w-100 d-flex">
        <v-spacer></v-spacer>
        <v-btn style="border-radius: 13px" class="" color="#58AF9B" flat>
          Cadastrar Médico
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: "DoctorForm",
  data: () => ({
        routeId: null
    }),
    computed: {
        ...mapState('doctor', ['doctor']),
        ...mapState('doctor', ['lstDoctor']),
    },
    methods: {
        ...mapActions('doctor', ['addDoctor']),
        ...mapActions('doctor', ['updateDoctor']),
        ...mapActions('doctor', ['getDoctor']),
        async save() {
            let response;
            if(!this.routeId)
                response = await this.addDoctor();
            else
                response = await this.updateDoctor();
            if(response)
                this.$router.push({ name: 'employees' });
        }
    },
    async mounted() {
        if (this.$router.currentRoute.value.params.employeeId) {
            this.routeId = this.$router.currentRoute.value.params.employeeId
            await this.getDoctor(this.$router.currentRoute.value.params.employeeId);
        }
    }
});
</script>

<style scoped>

</style>