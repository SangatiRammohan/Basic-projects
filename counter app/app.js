let ptag=document.getElementById("zero")
let btn1=document.getElementById("one")
let btn2=document.getElementById("two")
let btn3=document.getElementById("three")
let count =0

btn1.addEventListener("click",function(){
    count++
    display()
})
btn2.addEventListener("click",function(){
    count--
    display()
})
btn3.addEventListener("click",function(){
    count=0
    display()
})
function display(){
    console.log(count)
    ptag.textContent=count
}