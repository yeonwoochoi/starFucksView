<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="col-md-8">
                <v-container>
                    <v-row>
                        <v-col cols="12" class="col-md-12 ml-4">
                            <v-tabs v-model="tab" background-color="white darken-1" class="elevation-2"
                                    :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                                    :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                            >
                                <v-tabs-slider></v-tabs-slider>

                                <v-tab v-for="i in menuTabs" :key="i" :href="`#tab-${i}`">
                                    <a v-if="i===1" class="black--text title font-weight-light">{{ tabName[0] }}</a>
                                    <a v-else-if="i===2" class="black--text title font-weight-light">{{ tabName[1] }}</a>
                                    <a v-else class="black--text title font-weight-light">{{ tabName[2] }}</a>
                                </v-tab>

                                <v-tab-item v-for="i in menuTabs" :key="i" :value="'tab-' + i" class="px-5 py-3">
                                    <v-card flat tile>
                                        <div v-if="i === 1" class="flex box xs12 lg12">
                                            <Coffee></Coffee>
                                        </div>
                                        <div v-else-if="i === 2" class="flex box xs12 lg12">
                                            <Food></Food>
                                        </div>
                                        <div v-else class="flex box xs12 lg12">
                                            <Etc></Etc>
                                        </div>
                                    </v-card>

                                </v-tab-item>
                            </v-tabs>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>

            <v-col cols="12" class="col-md-4">
                <v-container>
                    <v-row>
                        <v-col cols="12" class="col-md-12 mr-6 mb-8">
                            <v-data-table
                                    :headers="headers"
                                    :items="orders"
                                    :items-per-page="5"
                                    divider=false
                                    item-key="orderListNumber"
                                    class="elevation-2">
                                <template v-slot:item.action="{ item }">
                                    <v-icon
                                            small
                                            class="mr-3"
                                            @click="deleteItem(item)"
                                    >
                                        delete
                                    </v-icon>
                                </template>
                                <template slot="footer">
                                    <td colspan="100%">
                                        <p v-if="orders.length > 0" class="title">
                                            total : $  {{ totalPrice }}
                                        </p>
                                        <p v-else class="title">
                                            total : $ 0
                                        </p>
                                    </td>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="col-md-2"></v-col>
                        <v-btn dark
                             large
                             color="indigo lighten-1"
                             cols="12"
                             class="col-md-3 text-center title font-weight-bold"
                             @click="checkPayment = !checkPayment">
                            <v-icon left>mdi-shopping</v-icon>
                            <span> Here</span>
                        </v-btn>
                        <v-col cols="12" class="col-md-2"></v-col>
                        <v-btn dark
                               large
                               color="indigo lighten-1"
                               cols="12"
                               class="col-md-3 text-center title font-weight-bold"
                               @click="checkPayment = !checkPayment">
                            <v-icon left>mdi-shopping</v-icon>
                            <span> To go</span>
                        </v-btn>
                        <v-dialog v-model="checkPayment" max-width="500px">
                            <v-card>
                                <v-card-text>
                                    <v-card-text>
                                        <p>Do you want to get receipt?</p>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="primary" v-if="orders.length > 0" @click="callReceipt">Yes</v-btn>
                                        <v-btn text color="primary" v-else @click="noReceipt">Yes</v-btn>
                                        <v-btn text color="primary" @click="noReceipt">Fucking no</v-btn>
                                    </v-card-actions>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="receiptCard" max-width="700px">
                            <v-card>
                                <v-card-text>
                                    <Receipt :order-list="orders" :total="totalPrice"></Receipt>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="resetOrderList">Check</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Coffee from '../product/Coffee'
    import Food from '../product/Food'
    import Etc from '../product/Etc'
    import Receipt from '../receipt/Receipt'
    import Log from '../../store/inputLog'

    export default {
        components: {
          Coffee, Food, Etc, Receipt
        },
        data: () => ({
            tab: null,
            menuTabs: 3,
            tabName: ['Coffee', 'Food', 'Etc'],
            page: 1,
            totalPage: 3,
            totalPrice: 0,
            receiptCard: false,
            checkPayment: false,
            prevIcon: false,
            nextIcon: false,
            singleSelect: false,
            selected: [],
            headers: [
                {text: 'No', align:'center', sortable:false, value: 'orderListNumber', class: 'title font-weight-bold'},
                {
                    text: 'Order Lists',
                    align: 'center',
                    value: 'name',
                    class: 'title font-weight-bold'
                },
                {text: 'price', value: 'price', class: 'title font-weight-bold'},
                {text: '', value: 'action', class:'title font-weight-bold'}
            ],
            orders: []
        }),
        methods: {
            countTotal: function () {
                let total = 0
                if (this.orders.length > 0) {
                    for (let i = 0; i < this.orders.length; i++) {
                        total += this.orders[i]['price']
                    }
                }
                this.totalPrice = total
            },
            deleteItem: function(item) {
                const index = this.orders.indexOf(item)
                this.orders.splice(index, 1)
                this.countTotal()
            },
            callReceipt: function () {
                let newDateForm = new Date().toISOString().replace(/T..+/, '')
                this.checkPayment = !this.checkPayment
                this.receiptCard = !this.receiptCard
                Log.setData({date: newDateForm, lists: this.orders, total: this.totalPrice, orderNumber: Log.orderNumber})
                Log.addOrderNumber()
            },
            noReceipt: function() {
                this.checkPayment = !this.checkPayment
                this.resetOrderList()
            },
            resetOrderList: function () {
                this.orders = []
                this.totalPrice = 0
                this.receiptCard = false
            }
        },
        created() {
            this.$EventBus.$on('order', (item) => {
                this.orders.push({...item})
                this.countTotal()
            })
            this.$EventBus.$on('reset', () => {
                this.totalPrice = 0
                this.orders = []
            })

        }
    }
</script>

<style scoped>

</style>
