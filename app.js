// Play drum by keyboard press

// Play music by mouse click
const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

// Listens for click on boom button
boom.addEventListener("click",() => {
    console.log("boom")
    key5.play()
    // Play sounds here!
    // boomSound.play()
})
clap.addEventListener("click",() => {
    console.log("clap")
    key1.play()
    
})

hihat.addEventListener("click",() => {
    console.log("hihat")
    key2.play()
})

kick.addEventListener("click",() => {
    console.log("kick")
    key3.play()
})

openhat.addEventListener("click",() => {
    console.log("openhat")
    key4.play()
})

ride.addEventListener("click",() => {
    console.log("ride")
    key6.play()
})
snare.addEventListener("click",() => {
    console.log("snare")
    key7.play()
})

tink.addEventListener("click",() => {
    console.log("tink")
    key8.play()
})

tom.addEventListener("click",() => {
    console.log("tom")
    key9.play()
})

// if else statements

document.addEventListener("keypress",() => {
    if (event.which == 103) {
        key5.play()
     } else if (event.which == 97) {
        key1.play()
     } else if (event.which == 115) {
        key2.play()
     } else if (event.which == 100) {
        key3.play()
     } else if (event.which == 102) {
        key4.play()
     } else if (event.which == 104) {
       key6.play()
     } else if (event.which == 106) {
         key7.play()
     } else if (event.which == 107) {
         key8.play()
     } else if (event.which == 108) {
         key9.play()
     } 
        
    })

        




                   
                    
