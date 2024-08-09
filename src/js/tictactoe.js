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
let btnMarcador = document.getElementById("btnMarcador")

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
                    alerta("Gana el jugador","success")
                }else if(casillas[posicion1].innerHTML.includes("O")){
                    marcadorDeCompu++
                    localStorage.setItem("maquina",marcadorDeCompu)
                    alerta("Gana la maquina","success")
                }
                marcador()
            }
        })
    
    }


    function validarEmpate() {
        if(contadorMovimientos===9 && !juegoFinalizado){
            juegoFinalizado=true
            alerta("EMPATE","info")
        }
    }
    let marcadorDelJugador = localStorage.getItem("jugador") || 0
    let marcadorDeCompu = localStorage.getItem("maquina") || 0
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
function reiniciaMarcador() {
    marcadorDelJugador = 0
    marcadorDeCompu = 0
    localStorage.setItem("jugador",0)
    localStorage.setItem("maquina",0)
    let jugador = document.getElementById("marcador-jugador")
    let compu = document.getElementById("marcador-computadora")
    jugador.innerHTML = marcadorDelJugador
    compu.innerHTML = marcadorDeCompu
}


/*
    Implementaciòn del sweetalert para mostrar alertas personalizadas, se 
    utiliza el import del js y css que nos brinda sweet alert, ambos se colocan en el HTML de la página
    la estructura general de la alerta, la da por defecto sweet alert

    por parametro se le pasa lo que sería el titulo y el icono para que esta funciòn sea totalmente reutilizable
*/
function alerta(title,icon) {
    Swal.fire({
        title: title,
        icon: icon,
        showConfirmButton: false,
        timer:1000,
        position: "top"
      });
}




btnReinicio.addEventListener("click",reiniciarJuego)
btnMarcador.addEventListener("click",reiniciaMarcador)

marcador()
movimientoHumano()





