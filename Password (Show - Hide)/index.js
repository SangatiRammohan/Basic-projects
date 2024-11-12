let input =document.getElementById("pswd")

let icon= document.getElementById("icon")

function cion (){
    if(input.type==="password"){
        input.type="text"
        icon.className="fa-regular fa-eye"
    }else{
        input.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}