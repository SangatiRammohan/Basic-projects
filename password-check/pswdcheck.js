let input = document.getElementById("pswd")
let icon = document.getElementById("icon")
let msg = document.querySelector("p")

function cion() {
    if (input.type === "password") {
        input.type = "text"
        icon.className = "fa-regular fa-eye"
    } else {
        input.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}

function check(x) {
    if (x.key === "Enter") {
        if (input.value.length < 8) {
            msg.textContent = "Weak Password";
            msg.style.color="red"
        }else if(input.value.length >= 8 && input.value.length <= 10){
            msg.textContent = "Good Passowrd"
            msg.style.color="Orange"
        }else{
            msg.textContent="Strong Password"
            msg.style.color="green"
        }
    

    }
}