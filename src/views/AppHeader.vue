<template>
    <v-app-bar app color="#58af9b">
      <v-toolbar-title>Clínica</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(route, index) in routes"
        :key="index"
        :class="{ 'primary--text': $route.path === route.path }"
        text
        :to="route.path"
      >
        {{ route.name }}
      </v-btn>
    </v-app-bar>
</template>
  
  <script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        routes: [
          { name: 'Home', path: '/home' },
          { name: 'Médicos', path: '/doctors' },
          { name: 'Pacientes', path: '/patients' },
          { name: 'Funcionários', path: '/employees' }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>
  