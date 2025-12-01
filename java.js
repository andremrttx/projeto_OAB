function identifyCell(){
var isCell = false;
var navegador = navigator.userAgent;
if(navegador.indexOf('android') != -1){
    return isCell = true;
}else if(navegador.indexOf('iPhone') != -1){
    return isCell = true;
}else{
    return isCell;
}
}
function exibirEOcultar(appear,ocult1,ocult2,ocult3) {
    if (appear.style.display === "none") {
        appear.style.display = "block";
        appear.scrollIntoView();
        ocult1.style.display = "none";
        ocult2.style.display = "none";
        ocult3.style.display = "none";
    } else {
        appear.style.display = "none";
    }
}
function exibir_QM() {
    document.getElementById("Qm_somos").style.display = "block";
    document.getElementById("jogo_regras").style.display = "none";
}
function exibir_JG() {
    document.getElementById("Qm_somos").style.display = "none";
    document.getElementById("jogo_regras").style.display = "block";
}