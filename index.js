let home = 0
let guest = 0

function onePointHome(){
    home +=1
    document.getElementById("home").innerText = home
}

function twoPointHome(){
    home +=2
    document.getElementById("home").innerText = home
}

function threePointHome(){
    home +=3
    document.getElementById("home").innerText = home
}

function onePointGuest(){
    guest +=1
    document.getElementById("guest").innerText = guest
}

function twoPointGuest(){
    guest +=2
    document.getElementById("guest").innerText = guest
}

function threePointGuest(){
    guest +=3
    document.getElementById("guest").innerText = guest
}