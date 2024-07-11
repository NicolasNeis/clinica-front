<template>
    <v-snackbar
        v-model="global.snackbar.show"
        :color="global.snackbar.color"
        top
    >
        <div class="d-flex align-center">
            <v-progress-circular v-if="global.snackbar.loading" indeterminate :color="global.snackbar.textColor" width="3" size="20"></v-progress-circular>
            <div :class="global.snackbar.textColor + '--text'" style="padding-left: 10px;">
                {{ global.snackbar.text }}
            </div>
            <v-spacer></v-spacer>
            <div>
                <v-icon @click="global.snackbar.show = false">mdi-close</v-icon>
            </div>
        </div>
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