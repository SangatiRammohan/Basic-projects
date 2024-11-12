let toggle=document.querySelector("i")
toggle.onclick=function (){
    if(toggle.className==="fa-solid fa-toggle-on"){
        toggle.className="fa-solid fa-toggle-off"
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    }else{
        toggle.className="fa-solid fa-toggle-on"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
}