<template>
    <v-snackbar
        v-model="global.snackbar.show"
        :color="global.snackbar.color"
        top
        :right="global.snackbar.loading"
    >
        <div class="d-flex align-center" style="gap: 20px;">
            <v-progress-circular v-if="global.snackbar.loading" indeterminate :color="global.snackbar.textColor" class="pr-3"></v-progress-circular>
            <div :class="global.snackbar.textColor + '--text'">
                {{ global.snackbar.text }}
            </div>
        </div>
        <template v-slot:action="{ attrs }">
            <v-btn
                icon
                :color="global.snackbar.textColor"
                text
                v-bind="attrs"
               @click="global.snackbar.show = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    computed: {
        global: {
            get() {
                return this.$store.state.global;
            },
        },
    },
};
</script>