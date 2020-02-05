<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-data-table
                :headers="headers"
                :items="etcList"
                :page.sync="etcPage"
                :items-per-page="etcPerPage"
                hide-default-footer
                class="elevation-1"
                @click:row="orderEtc"
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
            <v-pagination v-model="etcPage" :length="etcPageCount"></v-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            etcPage: 1,
            etcPageCount: 1,
            etcPerPage: 8,
            headers: [
                {text: 'Image', align: 'left', sortable: false, value: 'path', class: 'subtitle-1 font-weight-bold' },
                {text: 'Etc', value: 'name', class: 'subtitle-1 font-weight-bold' },
                {text: 'price', value: 'price', class: 'subtitle-1 font-weight-bold' },
            ],
            etcList: [
                {
                    path:"https://globalassets.starbucks.com/assets/5c4e5f0233a54206b6836e678256420f.jpg",
                    name: "Colombia Nariño Verismo® Pods",
                    price: 9.0,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/ae880632857b444abdb8942a8b18cb00.jpg?impolicy=1by1_wide_1242",
                    name: "Decaf Espresso Roast Verismo® Pods",
                    price: 9.5,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/3ac77807d17d42b1b0858f6c4f32beeb.jpg?impolicy=1by1_wide_1242",
                    name: "Espresso Roast Verismo® Pods",
                    price: 9.0,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/b6adbad264ae4f65abaaa01d19901379.jpg",
                    name: "Ethiopia Yirgacheffe Verismo® Pods",
                    price: 10.0,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/c016e28984c34fa191f4cc5972356ebd.jpg?impolicy=1by1_wide_1242",
                    name: "Kenya Verismo® Pods",
                    price: 8.0,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/833e95732cc849a4b1fe1d315771ae0a.jpg?impolicy=1by1_wide_1242",
                    name: "Pike Place® Roast Verismo® Pods",
                    price: 8.5,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/1b0bc46a9e2041e9969d7576e056f8d7.jpg?impolicy=1by1_wide_1242",
                    name: "Sumatra Verismo® Pods",
                    price: 8.8,
                    count: 0
                },
                {
                    path: "https://globalassets.starbucks.com/assets/91bbe34108a2439e9e7ccc167fe82823.jpg?impolicy=1by1_wide_1242",
                    name: "Veranda Blend® Verismo® Pods",
                    price: 8.0,
                    count: 0
                }
            ]
        }),
        methods: {
            orderEtc: function (item) {
                this.$EventBus.$emit('order', item)
            }
        }
    }
</script>

<style scoped>

</style>
