let promise = new Promise((resolve,reject)=>{

    let a=4
    let b=4
    if(a===b)
    {
        resolve()
    }
    else
    {
        reject()
    }
})

console.log(promise)