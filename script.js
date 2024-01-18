naame = document.querySelector("#name")
email = document.querySelector("#email")
email2 = document.querySelector("#email2")
password = document.querySelector("#password")
password2 = document.querySelector("#password2")


naame.addEventListener('focusout', function(){
    password2.setAttribute('placeholder',`...or xX${naame.value}123`)
})

password2.addEventListener('focusout', function(){
    if(password2.value != password.value){
        password2.setAttribute('style', "border: solid 1px red;")
        
        if(password2.parentNode.lastChild.innerText !== "passwords don't match") {
            let err = document.createElement('p')
            err.innerText = "passwords don't match"
            err.style = "font-size: 0.7vw; color: red;"
            password2.parentNode.appendChild(err)
        }         
    } else {
        if(password2.parentNode.lastChild.innerText === "passwords don't match") {
            let err = password2.parentNode.lastChild
            password2.parentNode.removeChild(err)
        }

        password2.style = "border: 1px solid green;"
        
    }

})

