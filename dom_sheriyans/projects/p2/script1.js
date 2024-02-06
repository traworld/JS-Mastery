const sel = document.querySelector(".container")
const heart = document.querySelector("i")

sel.addEventListener("dblclick", function () {
     heart.style.transform = "translate(-50% ,-50%) scale(1)"
     setTimeout(function () {
          heart.style.transform = "translate(-50% ,-50%) scale(0)"
     },1000)
})
// we can use setTimeout to give delay
// we can use it by adding function inside the method and then after function closes we can wrtie seconds in millesecond