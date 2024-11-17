let colorchange=document.getElementById("color")
let img=document.querySelector("img")
let bradius=document.getElementById("bradius")

function change(x){

    if(x.key==="Enter"){
        document.body.style.backgroundColor=colorchange.value
       
    }
}
function border(x){
 if(x.key==="Enter"){
img.style.borderRadius=bradius.value
 }
}