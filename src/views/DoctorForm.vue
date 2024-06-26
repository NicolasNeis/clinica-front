<template>
  <div class="container">
    <v-btn @click="$router.push('home')" style="border-radius: 13px" width="100" class="ml-10 mb-4 mt-n4 align-self-start" flat>
      Menu
    </v-btn>
    <v-card width="95%" height="85%" color="white" class="mx-auto" style="border-radius: 10px">
      <div class="d-flex justify-center pa-3" style="background-color: #ecf0f1; font-size: 30px">
        Cadastro Médico
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
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoctorForm",
  data: () => ({}),
  computed: {},
  methods: {},
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