let share = document.getElementById("share");



function manejarBoton(){
    let vineta = document.getElementById("vineta");
    let estilo= window.getComputedStyle(vineta)
    
    if (estilo.display=="none"){
        vineta.style.display = "flex"
    } else{
        vineta.style.display = "none"
    }

}