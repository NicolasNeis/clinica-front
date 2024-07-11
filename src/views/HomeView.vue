<template>
  <v-card style="overflow-y: auto;" width="100%" height="100%" max-height="100%" color="white" class="mx-auto" elevation="0">
    <v-row>
      <v-col cols="9">
        <v-calendar ref="calendar" v-model="today" :events="getEvents" color="primary" type="month"
          view-mode="week"></v-calendar>
      </v-col>
      <v-col cols="3">
        <div class="pa-4 d-flex flex-column">
          <div class="w-100 d-flex wrap-0">
            <v-spacer></v-spacer>
            <v-btn class="" color="#58AF9B" flat @click="$router.push({ name: 'appointment' })">
              <v-icon>mdi-plus</v-icon>
              Novo apontamento
            </v-btn>
          </div>
          <div class="d-flex flex-column pt-6 wrap-1" style="gap: 10px; overflow: auto;">
            <v-card v-for="event in getEvents" class="pa-3" :key="event.id">
              <h3>
                Consulta - {{ formatDateToDDMMYYYY(event.start) }}
              </h3>
              <p>{{ getFormattedTime(event.start) }} - {{ getFormattedTime(event.end) }}</p>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    focus: '',
    events: [],
    today: []
  }),
  computed: {
    ...mapGetters('appointment', ['getEvents']),
  },
  methods: {
    ...mapActions('appointment', ['listAllAppointment']),
    formatDateToDDMMYYYY(date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    getFormattedTime(date) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },
  async mounted() {
    await this.listAllAppointment();
  }
});
</script>

<style scoped></style>