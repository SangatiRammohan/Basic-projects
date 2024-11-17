let element = document.querySelector("#result")
let clear=document.getElementById("vanish")
let elementfinal= document.getElementsByClassName("operator1")
let dele=document.getElementById("delete")

function validate(value){
    element.textContent=element.textContent+value
    
}

clear.onclick=function (){
    element.textContent=''
}

function final(){
    element.textContent=eval(element.textContent)
}

function del(){
    element.textContent=element.textContent.slice(0,-1)
}