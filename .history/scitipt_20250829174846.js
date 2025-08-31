import { arr } from "./arr/arr.js"

let container = document.querySelector(".container")

arr.forEach((item) => {
    let box = document.createElement("div")

    let background = document.createElement("div") 
    
    let h3 = document.createElement("h3")

    let p = document.createElement("p")

    let first_time = document.createElement("p")

    let secound_time = document.createElement("p")

    let third_time = document.createElement("p")

    let paragrph = document.createElement("p")

    let time = document.createElement("div")

    let img = document.createElement("img")


    box.classList.add("box")

    background.classList.add("background")

    h3.classList.add("h3")

    p.classList.add("p")

    first_time.classList.add("first_time")

    secound_time.classList.add("secound_time")

    third_time.classList.add("third")

    time.classList.add("time")

    paragrph.classList.add("paragrph")

    img.classList.add("img")


    img.src = "./img/Снимок экрана 2025-07-28 в 22.44.37.png"// test uchun

    h3.innerHTML = "MEN’S CLOTHING (120)"

    p.innerHTML = "Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday"

    first_time.innerHTML = "109"

    secound_time.innerHTML = "3.9"

    third_time.innerHTML = "120"

    paragrph.innerHTML = "В избранное"


    time.append(first_time, secound_time, third_time)

    background.append(h3, p, time , paragrph) 

    box.append(img, background)

    container.append(box)

});
console.log();
