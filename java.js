function exibir_G(){
    if(S_geral.style.display === "none"){
document.getElementById("S_geral").style.display = "block";
document.getElementById("S_emocional").style.display = "none";
document.getElementById("S_dentista").style.display = "none";

    }else{
        document.getElementById("S_geral").style.display = "none";
    }
}
function exibir_E(){
    if(S_emocional.style.display === "none"){
document.getElementById("S_geral").style.display = "none";
document.getElementById("S_emocional").style.display = "block";
document.getElementById("S_dentista").style.display = "none";
    }else{
        document.getElementById("S_emocional").style.display = "none";
    }
}
function exibir_T(){
    if(T_geral.style.display === "none"){
document.getElementById("T_geral").style.display = "block";
document.getElementById("T_aposentadoria").style.display = "none";
    }else{
        document.getElementById("T_geral").style.display = "none";
    }
}
function exibir_A(){
    if(T_aposentadoria.style.display === "none"){
document.getElementById("T_geral").style.display = "none";
document.getElementById("T_aposentadoria").style.display = "block";
    }else{
        document.getElementById("T_aposetadoria").style.display = "none";
    }
}
function exibir_Edu(){
    if(Edu.style.display === "none"){
document.getElementById("Edu").style.display = "block";
    }else{
        document.getElementById("Edu").style.display = "none";
    }
}
function exibir_QM(){
    if(Qm_somos.style.display === "none"){
document.getElementById("Qm_somos").style.display = "block";
    }else{
        document.getElementById("Qm_somos").style.display = "none";
    }
}
function exibir_GP(){
    if(Sobre_pj.style.display === "none"){
document.getElementById("Sobre_pj").style.display = "block";
    }else{
        document.getElementById("Sobre_pj").style.display = "none";
    }
}
function exibir_JG(){
    if(jogo_regras.style.display === "none"){
document.getElementById("jogo_regras").style.display = "block";
    }else{
        document.getElementById("jogo_regras").style.display = "none";
    }
}