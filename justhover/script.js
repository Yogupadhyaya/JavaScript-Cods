let but1=document.querySelector(".yes")
but1.addEventListener("click",()=>{
    document.writeln("Thanks")
})


let but2=document.querySelector(".no")
but2.addEventListener("mouseover", () => {
    let x=Math.floor(Math.random()*200-100)
let y=Math.floor(Math.random()*300-100)
     but2.style.position = "relative";
    but2.style.transform=`translate(${x}px ,${y}px)`
});
