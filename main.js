let share = document.getElementById("share");
let darkShare = document.getElementById("darkShare");



function manejarBoton(){
    let vineta = document.getElementById("vineta");
    let estilo= window.getComputedStyle(vineta)
    if (estilo.display=="none"){
        vineta.style.display = "flex"
        share.style.display = "none"
        darkShare.style.display = "flex"
    } else{
        vineta.style.display = "none"
        share.style.display = "flex"
        darkShare.style.display = "none"
    }

}