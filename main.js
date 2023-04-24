// DOM ELEMENTS-----------------------------

const colorFeildEl=document.querySelector(".color-field");
const btnEl=document.querySelector(".switcher")


function generateColor(){
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)

    return `rgb(${red},${green},${blue})`
}



const changeColor = () =>{
    let color=generateColor()
    document.body.style.background=color
    colorFeildEl.value=color
}



btnEl.addEventListener("click",changeColor)