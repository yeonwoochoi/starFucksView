<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="font-weight-bold">
                <p class="title">Receipt</p>
                <v-divider inset></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-list class="my-3">
                        <v-list-item v-for="item in orderList" :key="item.orderListNumber" link>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-title v-text="item.price"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="align-content-end title">total :  $ {{ total }}</v-col>
        </v-row>
        <v-spacer></v-spacer>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            payment: false
        }),
        props: ['orderList', 'total'],
    }
</script>

<style scoped>

</style>
