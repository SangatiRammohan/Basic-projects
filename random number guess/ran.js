let random = Math.floor(Math.random()*100)
    let attempts=0
function guess(){
    let num =document.getElementById("number")
    let div=document.getElementById("msg")
    let div1=document.getElementById("times")
    attempts++
    
    console.log(random)
    if(num.value==random){
        div.textContent="Congrats !, Number is Correct"
        div.style.color="lightgreen"
    }else if(num.value < random){
        div.textContent="Number is to low"
        div.style.color="red"
    }else if(num.value>random){
        div.textContent="Number is too High"
        div.style.color="Orange"
    }
    div1.textContent=`Attempts: ${attempts} `;
    num.value=""
}