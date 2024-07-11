<template>
    <v-card width="100%" height="100%" color="white" class="mx-auto" style="border-radius: 10px">
        <div class="d-flex justify-center pa-3" style="background-color: #ecf0f1; font-size: 30px">
            <v-btn icon="mdi-arrow-left" variant="text" class="position-absolute" style="left: 20px;" @click="$router.go(-1)"></v-btn>
            {{ !user.id ? "Cadastro Funcionário" : "Visualização Funcionário" }}
        </div>
        <div class="mx-16">
            <v-text-field v-model="user.userName" label="Nome" class="mt-10 mb-2" variant="outlined"
            density="compact" :rules="[rules.required]"></v-text-field>
            <v-text-field v-model="user.id" label="ID" class="mb-n3" variant="outlined" v-if="routeId" :disabled="true"
                density="compact"></v-text-field>
            <v-text-field v-model="user.password" label="Senha" class="mb-2" variant="outlined"
                density="compact" :rules="[rules.required]"></v-text-field>
            <v-checkbox v-model="user.role" :false-value="0" :true-value="1" label="Administrador" class="mb-n3" variant="outlined"
                density="compact"></v-checkbox>
            <div class="w-100 d-flex">
                <v-spacer></v-spacer>
                <v-btn style="border-radius: 13px" class="" color="#58AF9B" flat @click="save">
                    {{ routeId ? "Atualizar Funcionário" : "Cadastrar Funcionário"}}
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from 'vuex';

export default defineComponent({
    name: "EmployeeList",
    data: () => ({
        routeId: null,
        rules: {
            required: value => !!value || 'Campo obrigatório',
        },
    }),
    computed: {
        ...mapState('user', ['user']),
        ...mapState('user', ['lstUsers']),
    },
    methods: {
        ...mapActions('user', ['addEmployee']),
        ...mapActions('user', ['updateEmployee']),
        ...mapActions('user', ['getEmployee']),
        async save() {
            let response;
            if(!this.routeId)
                response = await this.addEmployee();
            else
                response = await this.updateEmployee();
            if(response)
                this.$router.push({ name: 'employees' });
        }
    },
    async mounted() {
        if (this.$router.currentRoute.value.params.employeeId) {
            this.routeId = this.$router.currentRoute.value.params.employeeId
            await this.getEmployee(this.$router.currentRoute.value.params.employeeId);
        }
    }
});
</script>

<style scoped>
</style>