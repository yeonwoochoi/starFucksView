export default {
    data: [],
    orderNumber: 1,
    setData(newData) {
        this.data.push({...newData})
    },
    addOrderNumber() {
        this.orderNumber++
    }
}
