<template>
    <v-app-bar

            color="indigo lighten-1 white--text"
            elevate-on-scroll app
            scroll-target="#scrolling-techniques-7"
    >
        <v-app-bar-nav-icon class="white--text" @click="onClickNav"></v-app-bar-nav-icon>

        <v-toolbar-title>StarFucks</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        methods: {
            onClickNav: function() {
                this.$EventBus.$emit('onClickNav')
            }
        }
    }
</script>

<style scoped>

</style>
