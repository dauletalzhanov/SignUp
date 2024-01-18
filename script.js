naame = document.querySelector("#name")
email = document.querySelector("#email")
email2 = document.querySelector("#email2")
password = document.querySelector("#password")
password2 = document.querySelector("#password2")


naame.addEventListener('mouseout', function(){
    password2.setAttribute('placeholder',`...or xX${naame.value}123`)
})
password2
