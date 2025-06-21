let url = "https://cat-fact.herokuapp.com/facts"; // Alternative working API for cat facts
let p= document.querySelector("button")
async function getData() {
    let response = await fetch(url);
    // console.log(response)
    let data=await response.json()
    console.log(data.fact)
}

p.addEventListener("click",getData)
