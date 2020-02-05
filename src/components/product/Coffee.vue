<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-data-table
                :headers="headers"
                :items="coffeeList"
                :page.sync="coffeePage"
                :items-per-page="coffeesPerPage"
                hide-default-footer
                class="elevation-1"
                @click:row="orderCoffee"
        >
            <template v-slot:item.path="{ item }">
                <v-img :src="item.path" contain height="200" width="230"></v-img>
            </template>
            <template v-slot:item.name="{ item }">
                <p class="title font-weight-light mt-4">{{ item.name }}</p>
            </template>
            <template v-slot:item.price="{ item }">
                <p class="title font-weight-light mt-4">$  {{ item.price }}</p>
            </template>
        </v-data-table>
        <div class="mt-8">
            <v-pagination v-model="coffeePage" :length="coffeePageCount"></v-pagination>
        </div>
    </div>

</template>

<script>
    import number from '../../store/orderListNumber'
    export default {
        data: () => ({
            coffeePage: 1,
            coffeePageCount: 4,
            coffeesPerPage: 8,
            headers: [
                {text: 'Image', align: 'left', sortable: false, value: 'path', class: 'title font-weight-bold' },
                {text: 'Coffee', value: 'name', class: 'title font-weight-bold' },
                {text: 'price', value: 'price', class: 'title font-weight-bold' },
            ],
            coffeeList : [
                {
                    path: 'https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_1242',
                    name: 'Almondmilk Honey Flat White with Starbucks® Blonde Espresso',
                    price: 5.0,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_1242',
                    name: 'Almondmilk Honey Flat White',
                    price: 4.5,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/abb4f97948c948c28ea2dcaf933c4f6b.jpg?impolicy=1by1_wide_1242',
                    name: 'Blonde Roast',
                    price: 4.0,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242',
                    name: 'Caffè Americano',
                    price: 4.8,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242',
                    name: 'Caffè Latte',
                    price: 3.5,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242',
                    name: 'Caffè Misto',
                    price: 4.0,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242',
                    name: 'Cappuccino',
                    price: 3.5,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/1039a0883ad548b69c5f93b9f76dbae2.jpg?impolicy=1by1_wide_1242',
                    name: 'Caramel Brulee Latte',
                    price: 4.0,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/7202df9b83c4419b8748263e73b4742f.jpg?impolicy=1by1_wide_1242',
                    name: 'Chestnut Praline Latte',
                    price: 4.3,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/9329c03ce24f4623be25dd24d7537db2.jpg?impolicy=1by1_wide_1242',
                    name: 'Cinnamon Dolce Latte',
                    price: 4.0,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/9eb90cb6981d42f5859376c4be666060.jpg?impolicy=1by1_wide_1242',
                    name: 'Coconutmilk Latte with Starbucks® Blonde Espresso',
                    price: 5.0,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/9eb90cb6981d42f5859376c4be666060.jpg?impolicy=1by1_wide_1242',
                    name: 'Coconutmilk Latte',
                    price: 4.2,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/51bf549cd8e9434da941fec33b820d39.jpg?impolicy=1by1_wide_1242',
                    name: 'Decaf Pike Place® Roast',
                    price: 4.6,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/741db5e629b34c739b3ecf4733aee4a3.jpg?impolicy=1by1_wide_1242',
                    name: 'Eggnog Latte',
                    price: 4.1,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242',
                    name: 'Espresso con Panna',
                    price: 3.9,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242',
                    name: 'Espresso',
                    price: 2.8,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg?impolicy=1by1_wide_1242',
                    name: 'Featured Starbucks® Dark Roast Coffee',
                    price: 3.2,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_1242',
                    name: 'Flat White',
                    price: 3.1,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/edd75880341c437ab194c14835fbb24e.jpg?impolicy=1by1_wide_1242',
                    name: 'Oatmilk Honey Latte with Starbucks® Blonde Espresso',
                    price: 4.5,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/edd75880341c437ab194c14835fbb24e.jpg?impolicy=1by1_wide_1242',
                    name: 'Oatmilk Honey Latte',
                    price: 4.3,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_wide_1242',
                    name: 'Pike Place® Roast',
                    price: 3.9,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/eea44e2041234b9cbaaff6607bea1d23.jpg?impolicy=1by1_wide_1242',
                    name: 'Smoked Butterscotch Latte',
                    price: 3.8,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/049d23aac19047f4b3a40532cc24b510.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks Reserve® Hazelnut Bianco Latte',
                    price: 4.7,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/55083489399e435e81cf41d899051a5a.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks Reserve® Latte',
                    price: 3.2,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/ae11e1ff43824e95982e7300f35f44c3.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Caffè Americano',
                    price: 3.3,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Caffè Latte',
                    price: 3.5,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Cappuccino',
                    price: 3.7,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/92cf4d884c3d4c0fa12605736d335ddb.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Caramel Brulée Latte',
                    price: 3.8,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/e576da99012845e6b1e16ec0acdf015c.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Chestnut Praline Latte',
                    price: 4.5,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/741db5e629b34c739b3ecf4733aee4a3.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Eggnog Latte',
                    price: 4.6,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Flat White',
                    price: 4.2,

                },
                {
                    path: 'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242',
                    name: 'Starbucks® Blonde Vanilla Latte',
                    price: 3.3,

                }
            ]
        }),
        methods: {
            orderCoffee: function (item) {
                number.addNumber()
                item['orderListNumber'] = number.orderLIstNumber
                this.$EventBus.$emit('order', item)
            }
        }
    }
</script>

<style scoped>

</style>
