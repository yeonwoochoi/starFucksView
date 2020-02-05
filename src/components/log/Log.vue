<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-row>
            <v-col cols="12" class="col-md-12 my-12">
                <v-data-table
                    :headers="headers"
                    :items="inputLog"
                    :single-expand="singleExpand"
                    :expanded="expanded"
                    item-key="orderNumber"
                    show-expand
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-btn icon @click="prev">
                                <v-icon>fas fa-chevron-left</v-icon>
                            </v-btn>
                            <v-toolbar-title>
                                {{ nowDate.toISOString().replace(/T..+/, '') }}
                            </v-toolbar-title>
                            <v-btn icon @click="next">
                                <v-icon>fas fa-chevron-right</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }" >
                        <td :colspan="headers.length" v-if="nowDate.toISOString().replace(/T..+/, '') === item.date">
                            <v-data-table
                                    :headers="headers2"
                                    :items="item.lists"
                                    item-key="orderListNumber"
                                    hide-default-header
                                    hide-default-footer
                            >

                            </v-data-table>
                        </td>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Log from '../../store/inputLog'

    export default {
        data: () => ({
            nowDate: new Date(),
            inputLog:  Log.data,
            expanded: [],
            singleExpand: false,
            headers2: [
                {text: `Index`, value:`orderListNumber`},
                {text:`Name`, align:`left`, sortable:false, value:`name`},
                {text:`Price`, value:`price`}
            ]
        }),
        computed: {
          headers() {
              return [
                  {
                      text: 'Date',
                      value: 'date',
                      align: 'left',
                      filter: value => {
                          return this.nowDate.toISOString().replace(/T..+/, '') === value
                      }
                  },
                  { text: 'Order Number', align: 'left', sortable: false, value: 'orderNumber'},
                  { text: 'Total', value: 'total' }
              ]
          }
        },
        methods: {
            prev() {
                this.nowDate = new Date(this.nowDate.setDate(this.nowDate.getDate() - 1))
            },
            next() {
                this.nowDate = new Date(this.nowDate.setDate(this.nowDate.getDate() + 1))
            }
        }
    }
</script>

<style scoped>

</style>
