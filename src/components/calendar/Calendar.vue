<template>
    <v-container>
        <v-row class="fill-height">
            <v-col>
                <v-sheet height="64">
                    <v-toolbar flat color="white">
                        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                            Today
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="prev">
                            <v-icon small>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                        <v-btn fab text small color="grey darken-2" @click="next">
                            <v-icon small>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="600">
                    <v-calendar
                            ref="calendar"
                            v-model="focus"
                            color="primary"
                            @click:date="openDateLog"
                            @change="updateRange"
                    ></v-calendar>
                    <v-dialog
                            v-model="selectedOpen"
                            width="500"
                    >
                        <v-card
                                color="grey lighten-4"
                                min-width="350px"
                                flat
                        >
                            <v-toolbar dark>
                                <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-toolbar-title v-html="this.focus"></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" class="title font-weight-bold">
                                        total: $ {{ dayTotal }}
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                        text
                                        color="secondary"
                                        @click="selectedOpen = false"
                                >
                                    Cancel
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Logs from '../../store/inputLog'
    export default {
        data: () => ({
            focus: '',
            today: '',
            typeToLabel: {
                month: 'Month'
            },
            start: null,
            end: null,
            selectedOpen: false,
            dateInfo: [],
            dayTotal: 0,
            logs: [],
            colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
            names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
        }),
        computed: {
            title () {
                const { start, end } = this // const start = this.start && const end = this.end
                if (!start || !end) {
                    return ''
                }
                const startMonth = this.monthFormatter(start)
                const startYear = start.year

                return `${startMonth} ${startYear}`
            },
            monthFormatter () {
                return this.$refs.calendar.getFormatter({
                    timeZone: 'UTC', month: 'long',
                })
            },
        },
        mounted () {
            this.$refs.calendar.checkChange()
        },
        methods: {
            setToday () {
                this.focus = this.today
            },
            prev () {
                this.$refs.calendar.prev()
            },
            next () {
                this.$refs.calendar.next()
            },
            updateRange ({ start, end }) {
                this.logs = Logs.data
                this.start = start
                this.end = end
            },
            openDateLog({ date }) {
                this.focus = date
                let dayTotal = 0
                if (this.logs.length > 0) {
                    for (let i = 0; i < this.logs.length; i++) {
                        if (this.logs[i]['date'] === date) {
                            dayTotal += this.logs[i]['total']
                        }
                    }
                }
                this.dayTotal = dayTotal
                this.selectedOpen = !this.selectedOpen
            }
        },
    }
</script>

<style scoped>

</style>
