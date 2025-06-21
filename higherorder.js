//Chaining Method

const amount = [1000,2000,3000,-4000,-5000,1000]

let transaction = amount.filter((n)=>{
    return n>0
}).reduce((acc,value)=>{
    let total = acc +value
    return total
},0)

console.log(transaction)