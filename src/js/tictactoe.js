let casilla1 = document.getElementById("casilla1")
let casilla2 = document.getElementById("casilla2")
let casilla3 = document.getElementById("casilla3")
let casilla4 = document.getElementById("casilla4")
let casilla5 = document.getElementById("casilla5")
let casilla6 = document.getElementById("casilla6")
let casilla7 = document.getElementById("casilla7")
let casilla8 = document.getElementById("casilla8")
let casilla9 = document.getElementById("casilla9")

let casillas=[casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8,casilla9]
let x = `<img src = ${"https://img.icons8.com/?size=100&id=LNNeDNmm6Io1&format=png&color=000000"}>`
let o = `<img src = ${"https://img.icons8.com/?size=100&id=BUYcpnTFpNW1&format=png&color=000000"}>`
function movimientoHumano() {
casillas.forEach((casilla)=>casilla.addEventListener("click",()=> {
                     //cualquier casilla que toque va a pasar lo siguiente

    if (casilla.innerHTML === "") {
        casilla.innerHTML = x
        movimientoPc()
    }

})) 
}

function movimientoPc() {

    setTimeout(() => {
    let casillasVacias = casillas.filter((casilla)=> casilla.innerHTML == "");
    let aleatorio = Math.floor(Math.random() * casillasVacias.length);
    casillasVacias[aleatorio].innerHTML = o
 },"300");
 
}
movimientoHumano()




