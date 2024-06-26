<template>
  <div class="container">
    <v-btn @click="$router.push('home')" style="border-radius: 13px" width="100"
      class="ml-10 mb-4 mt-n4 align-self-start" flat>
      Menu
    </v-btn>
    <v-card width="95%" height="85%" color="white" class="mx-auto" style="border-radius: 10px">
      <div class="d-flex justify-center pa-3" style="background-color: #ecf0f1; font-size: 30px">
        Cadastro Paciente
      </div>
      <div class="mx-16">
        <v-text-field v-model="patient.id" label="Nome Completo" class="mt-10 mb-n3" variant="outlined" :disabled="routeId"
          density="compact"></v-text-field>
        <v-text-field v-model="patient.name" label="Nome" class="mb-n3" variant="outlined"
          density="compact"></v-text-field>
        <v-text-field v-model="patient.cpf" label="CPF" class="mb-n3" variant="outlined"
          density="compact"></v-text-field>
        <!-- <v-text-field v-model="patient.dateOfBirth" label="Data de nascimento" class="mb-n3" variant="outlined" density="compact"></v-text-field> -->

        <v-text-field v-model="patient.phone" label="Telefone" class="mb-n3" variant="outlined"
          density="compact"></v-text-field>
        <div class="w-100 d-flex">
          <v-spacer></v-spacer>
          <v-btn style="border-radius: 13px" class="" color="#58AF9B" flat @click="save()">
            {{ routeId ? "Atualizar Paciente" : "Cadastrar Paciente"}}
          </v-btn>
        </div>
      </div>

    </v-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: "PatientForm",
  data: () => ({
    routeId: null
  }),
  components: {
  },
  computed: {
    ...mapState('patient', ['patient']),
  },
  methods: {
    ...mapActions('patient', ['addPatient']),
    ...mapActions('patient', ['updatePatient']),
    ...mapActions('patient', ['getPatient']),
    async save() {
      const response = await this.addPatient(this.patient);
      if (response)
        this.$router.push({ name: 'patients' })
    }
  },
  async mounted() {
    if (this.$router.currentRoute.value.params.patientId) {
      this.routeId = this.$router.currentRoute.value.params.patientId
      await this.getPatient(this.$router.currentRoute.value.params.patientId);
    }
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