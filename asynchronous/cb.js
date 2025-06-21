
// //sychronous programming example
// const fs = require('fs')

// console.log("first line")
// let data = fs.readFileSync("f1.txt")
// console.log(data.toString())
// console.log('last line')





// //asychronous programming example
// const fs = require('fs')

// console.log("first line")

// fs.readFile('f1.txt',cb1)

// function cb1(err,data){         //You can't use function expression or arrow function because variable can't be used before intitalization  
// if(err)                         // It will store undefined but with function declartion we can use and this is hoisting
// {
//     console.log('error')
//     return
// }
// console.log(data.toString())

// }

// console.log('last line')



// //asychronous programming example MUltiple files
// const fs = require('fs')

// console.log("first line")

// fs.readFile('f1.txt', cb1)

// function cb1(err, data) {         //You can't use function expression or arrow function because variable can't be used before intitalization  
//     if (err)                         // It will store undefined but with function declartion we can use and this is hoisting
//     {
//         console.log('error')
//         return
//     }
//     console.log(data.toString())

// }

// fs.readFile('f2.txt', cb2)
// function cb2(err, data) {
//     if (err) {
//         console.log('error')
//         return
//     }
//     console.log(data.toString())

// }                                       // It is giving random file data printed 
// fs.readFile('f3.txt', cb3)
// function cb3(err, data) {
//     if (err) {
//         console.log('error')
//         return
//     }
//     console.log(data.toString())

// }
// console.log('last line')



// //asychronous programming example MUltiple files serial Execution
// const fs = require('fs')

// console.log("first line")

// fs.readFile('f1.txt', cb1)

// function cb1(err, data) {         //You can't use function expression or arrow function because variable can't be used before intitalization  
//     if (err)                         // It will store undefined but with function declartion we can use and this is hoisting
//     {
//         console.log('error')
//         return
//     }
//     console.log(data.toString())
// fs.readFile('f2.txt', cb2)
// }


// function cb2(err, data) {
//     if (err) {
//         console.log('error')
//         return
//     }
//     console.log(data.toString())
// fs.readFile('f3.txt', cb3)
// }                                       // No It is not giving random file data printed It is printing serially as we have put

// function cb3(err, data) {
//     if (err) {
//         console.log('error')
//         return
//     }
//     console.log(data.toString())

// }
// console.log('last line')


//settimeout
// console.log('before'
// )

// function greet()
// {
//     console.log('Hello world')
// }
// setTimeout(greet,5000)

// console.log('after')

//Setinterval

// function greet()
// {
//     console.log('Hello World')
// }
// setInterval(greet,2000)

// the above code will run forever and prints we should stop it after sometime for that we can use settime out

// function greet()
// {
//     console.log('Hello World')
// }
// let time = setInterval(greet,2000)

// setTimeout(function(){
//     clearInterval(time)
// },6000)




//promises in js

// let promise = new Promise((resolve,reject)=>{

//     let a=4
//     let b=5
//    setTimeout(()=>{
    
//     if(a===b)
//     {
//         resolve('The values are Equal')
//     }
//     else
//     {
//         reject('Not equal')
//     }

//    },3000) 
// })

// promise.then(function(result){
//     console.log(result)
// })
// promise.catch(function(result){
//     console.log(result)
// })


//Promise Chain

//Call back hell lai solve garna Promise aayo promise chain bata ani feri yeslai pani sajilo banauna async wait aayo

// let assyncfunc1 = ()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve("sucess")
//         },5000)
//     })

// }


// let assyncfunc2 = ()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve("sucess")
//         },5000)
//     })

// }

// console.log("Fetching Data 1")
// let p1=assyncfunc1()
// p1.then((res)=>{
//     console.log(res)
//     console.log("Fetching Data 2")
//     let p2=assyncfunc2()
//     return p2
// }).then((res)=>{
//     console.log(res)
// })




// function getData(DataID)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data ",DataID)
//           resolve("success")
//         },2000)
//     })
// }

// getData(1).then((res)=>{
//     console.log(res)
//     return getData(2) //jun pani yo function bata auchha teslai pass garde ani check gar feri
// }).then((res)=>{
//     console.log(res)
//     return getData(3)
// }).then((res)=>{})

// async function getDataAll()
// {
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
//     await getData(6)
//     await getData(7)
//     await getData(8)
// }

// getDataAll()