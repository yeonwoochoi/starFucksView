<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-data-table
                :headers="headers"
                :items="foodList"
                :page.sync="foodPage"
                :items-per-page="foodPerPage"
                hide-default-footer
                class="elevation-1"
                @click:row="orderFood"
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
            <v-pagination v-model="foodPage" :length="foodPageCount"></v-pagination>
        </div>
    </div>

</template>

<script>
    export default {
        data: () => ({
            foodPage: 1,
            foodPageCount: 2,
            foodPerPage: 8,
            headers: [
                {text: 'Image', align: 'left', sortable: false, value: 'path', class: 'subtitle-1 font-weight-bold' },
                {text: 'Food', value: 'name', class: 'subtitle-1 font-weight-bold' },
                {text: 'price', value: 'price', class: 'subtitle-1 font-weight-bold' },
            ],
            foodList : [
                {
                    path:"https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_wide_1242",
                    name: "Avocado Spread",
                    price: 3.3,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/f4c8069808d348e9856543bb0d613f2e.jpg?impolicy=1by1_wide_1242",
                    name: "Bacon & Gruyère Sous Vide Egg Bites",
                    price: 4.2,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/76909e4b00b5430faef132b2fa93e40b.jpg?impolicy=1by1_wide_1242",
                    name: "Bacon, Gouda & Egg Sandwich",
                    price: 3.9,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/3bf55b5c24c44a6caa18acb357295f47.jpg?impolicy=1by1_wide_1242",
                    name: "Blueberry Bagel",
                    price: 2.9,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/3bf55b5c24c44a6caa18acb357295f47.jpg?impolicy=1by1_wide_1242",
                    name: "Blueberry Oat Cake",
                    price: 3.3,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/120c7a611a5c4205b9e1a46355592b90.jpg?impolicy=1by1_wide_1242",
                    name: "Chicken Sausage & Bacon Biscuit",
                    price: 4.0,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/738d89c837874a4ab31044808764b6fb.jpg?impolicy=1by1_wide_1242",
                    name: "Chonga Bagel",
                    price: 3.5,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/b4bce2e2d28141e79b64f9e2de4a789c.jpg?impolicy=1by1_wide_1242",
                    name: "Cinnamon Raisin Bagel",
                    price: 3.4,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/0612427b8d134a098b6f7457fdac44d2.jpg?impolicy=1by1_wide_1242",
                    name: "Classic Oatmeal",
                    price: 3.7,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_wide_1242",
                    name: "Double-Smoked Bacon, Cheddar & Egg Sandwich",
                    price: 4.3,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/9e2c9538d66e4c43844b154b14b2f501.jpg?impolicy=1by1_wide_1242",
                    name: "Egg White & Roasted Red Pepper Sous Vide Egg Bites",
                    price: 3.3,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/d4d80b7e77ac4773844defc54f63302a.jpg?impolicy=1by1_wide_1242",
                    name: "Everybody's Favorite – Bantam Bagel (2-pack)",
                    price: 3.6,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/aab900db615743f4a870b09ef8885436.jpg?impolicy=1by1_wide_1242",
                    name: "Everything Bagel with Cheese",
                    price: 4.1,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/7bc53d54d0c8453f8d797014f69457ac.jpg?impolicy=1by1_wide_1242",
                    name: "Gingerbread Loaf",
                    price: 3.7,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/d92fff405e7f4a6f8744670e68625d04.jpg?impolicy=1by1_wide_1242",
                    name: "Ham, Cheddar & Peppers Sous Vide Egg Bites",
                    price: 4.1,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/3e10e6d4c9cb412b9f37d421c0376465.jpg?impolicy=1by1_wide_1242",
                    name: "Hearty Blueberry Oatmeal",
                    price: 4.0,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_wide_1242",
                    name: "Plain Bagel",
                    price: 2.6,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/b7e25a03655741869ced8dfde8c70659.jpg?impolicy=1by1_wide_1242",
                    name: "Reduced-Fat Turkey Bacon & Cage-Free Egg White Sandwich",
                    price: 3.7,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/37470b5347354e6890025ae7e90f0fa4.jpg?impolicy=1by1_wide_1242",
                    name: "Roasted Ham, Swiss & Egg Sandwich",
                    price: 4.3,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/c96aed66f1bf4ba3a9a545a497873ede.jpg?impolicy=1by1_wide_1242",
                    name: "Sausage, Cheddar & Egg Sandwich",
                    price: 4.4,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/87c1899ef5614367b60c3d61d6624af7.jpg?impolicy=1by1_wide_1242",
                    name: "Spicy Chorizo, Monterey Jack & Egg Sandwich",
                    price: 4.6,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/e4583a7fdc89458983fdacb248debb10.jpg?impolicy=1by1_wide_1242",
                    name: "Spinach, Feta & Cage-Free Egg White Wrap",
                    price: 4.5,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/b671f44e46bf4a0182dbf9ba869fde55.jpg?impolicy=1by1_wide_1242",
                    name: "Sprouted Grain Vegan Bagel",
                    price: 3.2,
                    count: 0
                },
                {
                    path:"https://globalassets.starbucks.com/assets/c32ce421bb5a4824b419bf57ddf679a6.jpg?impolicy=1by1_wide_1242",
                    name: "The Classic – Bantam Bagels (2-pack)",
                    price: 2.0,
                    count: 0
                }
            ]
        }),
        methods: {
            orderFood: function (item) {
                this.$EventBus.$emit('order', item)
            }
        }
    }
</script>

<style scoped>

</style>
