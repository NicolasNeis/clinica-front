<template>
  <v-app>
    <AppHeader v-if="$route.name !== 'login'"/>
    <LoginView v-if="$route.name === 'login'"/>
    <v-main class="container" :style="[$route.name !== 'home' ? {padding: '20px 30px', marginTop: '64px'} : {}]" v-if="$route.name !== 'login'">
      <router-view/>
      <SnackBar/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './views/AppHeader.vue';
import LoginView from './views/LoginView.vue';
import SnackBar from './views/SnackBar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    AppHeader,
    LoginView,
    SnackBar
  }
}
</script>

<style>

html{
  overflow-y: hidden !important;
  font-family: "Poppins", sans-serif !important;
}
.container {
    height: calc(100vh - 64px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: gainsboro;
    justify-content: center;
    align-items: center;
}
</style>