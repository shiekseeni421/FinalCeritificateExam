if (localStorage.getItem("loginDetalis") === "true") {
    window.location = "./order.html";
  }


let Ordersel= document.getElementById("Orders")
let Productel=document.getElementById("Products")
let Usersel=document.getElementById("Users")

let userInputEl=document.getElementById("userInput");
let passwordInputEl=document.getElementById("passwordInput")
let Logibutton=document.getElementById("loginbutton")

Ordersel.onclick=(function(){
    Productel.classList.remove("clickel")
    Usersel.classList.remove("clickel")
    Ordersel.classList.add("clickel")
    window.location = "./order.html";
})


Productel.onclick=(function(){
    Productel.classList.add("clickel")
    Usersel.classList.remove("clickel")
    Ordersel.classList.remove("clickel")
    window.location = "./product.html";
})


Usersel.onclick=(function(){
    Productel.classList.remove("clickel")
    Usersel.classList.add("clickel")
    Ordersel.classList.remove("clickel")
    window.location = "./user.html";
})



Logibutton.addEventListener('click',function(event){
    event.preventDefault()
    if(userInputEl.value==="" || passwordInputEl.value===""){
        alert("Enter user Name and password")
    }
    else{
        if(userInputEl.value===passwordInputEl.value){
            alert("Login Sucessfully")
            localStorage.setItem("loginDetalis", true);
            window.location = "./order.html";
        }
        else{
            alert("valid password")
        }
    }
    
})

