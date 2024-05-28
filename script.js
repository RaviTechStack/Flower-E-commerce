let menu = document.querySelector("#mobile-menu")
let menuBtn = document.querySelector("#menuBtn")
let overlay = document.querySelector("#BlackOverlay")
menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("-translate-x-full")
    overlay.classList.toggle("hidden")
})
