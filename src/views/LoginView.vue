<template>
  <div class="main-container">
    <div class="left-container">
      <div style="background-color: white; border-radius: 40%; margin: 90px; padding: 0px 40px; display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
        <v-img src="..\assets\logo-clinica.png" height="auto" width="auto"></v-img>
      </div>
    </div>
    <div class="right-container">
      <h1 class="login-text">{{ user.isRegister ? "Cadastro" : "Login"}}</h1>
      <div class="w-100 d-flex flex-column align-center mt-6">
        <v-form @submit.prevent class="d-flex flex-column w-50 w-md-50" v-model="valid">
          <div v-if="!user.isRegister">
            <v-text-field :rules="required" label="Nome de usuário" class="w-100" v-model="user.userName"></v-text-field>
            <v-text-field :rules="required" label="Senha" type="password" class="mt-2 w-100"
              v-model="user.password"></v-text-field>
            <div class="d-flex justify-space-between align-center flex-wrap">
              <v-btn @click="user.isRegister = !user.isRegister" variant="plain" :ripple="false"  color="#58AF9B" style="word-break: break-all;">Esqueceu sua senha?</v-btn>
              <v-btn class="mt-2 shrink px-14" type="submit" color="#58AF9B" :loading="buttonLoading"
                @click="login">Login</v-btn>
            </div>
          </div>
          <div v-else>
            <v-text-field :rules="required" label="Nome de usuário" class="w-100" v-model="user.userName"></v-text-field>
            <v-text-field :rules="required" label="Senha" type="password" class="mt-2 w-100"></v-text-field>
            <div class="d-flex justify-space-between align-center">
              <v-btn @click="user.isRegister = !user.isRegister" variant="plain" :ripple="false"  color="#58AF9B">Voltar para login</v-btn>
              <v-btn class="mt-2 shrink px-14" type="submit" color="#58AF9B" :loading="buttonLoading"
                @click="login">Cadastrar</v-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginView',
  data: () => ({
    buttonLoading: false,
    required: [value => !!value || 'Campo obrigatório.'],
    valid: false,
  }),
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    async login() {
      if(this.valid){
        this.buttonLoading = true
        const response = await this.$store.dispatch('user/login')
        if (response) {
          this.buttonLoading = false
          this.$router.push({name: 'home'})
        }
        this.buttonLoading = false
      }
    },
    async signIn() {
      if(this.valid){
        this.buttonLoading = true
        const response = await this.$store.dispatch('user/signIn')
        if (response) {
          this.buttonLoading = false
          this.$router.push({name: 'home'})
        }
        this.buttonLoading = false
      }
    }
  }
});
</script>

<style scoped>
.main-container {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.left-container {
  width: 40%;
  background-color: #58AF9B;
}

.right-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.login-text {
  color: #58AF9B;
  font-size: 80px;
}
</style>
