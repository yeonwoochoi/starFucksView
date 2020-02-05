let abc = []
console.log(!abc)

console.log(new Date(new Date().toISOString().replace(/T..+/, '')).toISOString().replace(/T..+/, ''))

console.log(new Date(`2020-02-03`))
console.log(new Date(new Date(`2020-02-03`).getTime() + 86399999))
