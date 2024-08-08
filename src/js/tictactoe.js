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
let btnReinicio = document.getElementById("btnReinicio")
// casillas[0].innerHTML="0"
// casillas[1].innerHTML="1"
// casillas[2].innerHTML="2"
// casillas[3].innerHTML="3"
// casillas[4].innerHTML="4"
// casillas[5].innerHTML="5"
// casillas[6].innerHTML="6"
// casillas[7].innerHTML="7"
// casillas[8].innerHTML="8"
let x = `<img src = ${"https://emojigraph.org/media/htc/cross-mark_274c.png"} alt="X">`
let o = `<img src = ${"https://emojigraph.org/media/htc/hollow-red-circle_2b55.png"} alt="O">`
let juegoFinalizado = false
let contadorMovimientos = 0

function movimientoHumano() {
    casillas.forEach((casilla)=>casilla.addEventListener("click",()=> {
        if (casilla.innerHTML == "" && !juegoFinalizado) {
            casilla.innerHTML = x
            contadorMovimientos++
            validarGanador()
            validarEmpate()
            if(!juegoFinalizado){
                movimientoPc()
                contadorMovimientos++
                validarEmpate()
            }
        }
     })) 
    }
    function movimientoPc() {
        setTimeout(() => {
        let casillasVacias = casillas.filter((casilla)=> casilla.innerHTML == "");
        let aleatorio = Math.floor(Math.random() * casillasVacias.length);
        casillasVacias[aleatorio].innerHTML = o
        validarGanador()
     },"500");
     
    }

    function validarGanador() {
        const posicionesGanadoras = [
            [0,1,2],[3,4,5],[6,7,8], //  FILAS
            [0,3,6],[1,4,7],[2,5,8], // COLUMNAS
            [0,4,8],[2,4,6] // DIAGONALES
        ]
        posicionesGanadoras.forEach((posicion)=>{
            const [posicion1,posicion2,posicion3] = posicion
            if (casillas[posicion1].innerHTML !== "" && casillas[posicion1].innerHTML===
                casillas[posicion2].innerHTML && casillas[posicion1].innerHTML === 
                casillas[posicion3].innerHTML) {
                juegoFinalizado = true
                if(casillas[posicion1].innerHTML.includes("X")){
                    marcadorDelJugador++
                    localStorage.setItem("jugador",marcadorDelJugador)
                    alert("VICTORIA JUGADOR")
                }else if(casillas[posicion1].innerHTML.includes("O")){
                    marcadorDeCompu++
                    localStorage.setItem("compu",marcadorDeCompu)
                    alert("VICTORIA COMPU")
                }
                marcador()
            }
        })
    
    }


    function validarEmpate() {
        if(contadorMovimientos===9 && !juegoFinalizado){
            juegoFinalizado=true
            alert("EMPATE")
        }
    }
    let marcadorDelJugador = localStorage.getItem("jugador") || 0
    let marcadorDeCompu = localStorage.getItem("compu") || 0
    function marcador(){
        let jugador = document.getElementById("marcador-jugador")
        let compu = document.getElementById("marcador-computadora")
    
        jugador.innerHTML=marcadorDelJugador
        compu.innerHTML=marcadorDeCompu
    
    }
function reiniciarJuego(){
    casillas.forEach(casilla=>{
        casilla.innerHTML=""
    })
    contadorMovimientos = 0
    juegoFinalizado = false
}
btnReinicio.addEventListener("click",reiniciarJuego)


marcador()
movimientoHumano()





