const sel = document.querySelector(".add")
const head = document.querySelector("h2") 
const remo = document.querySelector(".remove")


// type 1
sel.addEventListener("click", function () {
    head.innerHTML= "Friend"
    head.style.color= "green"
})
remo.addEventListener("click", function () {
    head.innerHTML="Stranger"
    head.style.color= "red"
    
})


