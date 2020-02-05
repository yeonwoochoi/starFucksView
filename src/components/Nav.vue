<template>
    <v-navigation-drawer v-model="drawer" absolute temporary app class="indigo lighten-1" dark>
        <v-list>
            <v-list-item-title class="pb-2 mx-5 mt-3 title">StarFucks</v-list-item-title>
        </v-list>

        <v-divider></v-divider>

        <v-list class="mx-5 my-2">
            <v-list-item-avatar class="pb-0 mb-0">
                <v-icon size="x-large">{{ user.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="pt-0 mx-3 mt-0 mb-3">
                <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list>

        <v-divider></v-divider>

        <v-list-item-group>
            <v-list-item v-for="item in items" :key="item.header" :to="item.path">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="item.header"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            user: {
                icon: 'fas fa-user-circle',
                name: 'Michael Ochoa',
                email: 'ironsoldier01@google.com'
            },
            items: [
                {
                    subheader: 'Home',
                    header : 'Home',
                    icon: 'fas fa-home',
                    path:'/'
                },
                {
                    subheader: 'Introduction',
                    header : 'Introduction',
                    icon: 'far fa-list-alt',
                    path:'/introduction'
                },
                {
                    subheader: 'Calendar',
                    header: 'Calendar',
                    icon: 'fas fa-calendar',
                    path: '/calendar'
                },
                {
                    subheader: 'Log',
                    header: 'Log',
                    icon: 'far fa-save',
                    path: '/log'
                }
            ]
        }),
        created() {
            this.$EventBus.$on('onClickNav', () => {
                this.drawer = !this.drawer
            })
        }
    }
</script>

<style scoped>

</style>
