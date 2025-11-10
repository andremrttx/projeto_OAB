var celular = {
    indentificarCell: function(){
    var celular = navigator.userAgent;
    if(celular.indexOf("Android") != -1){
    this.mudarTela();
    }
    if(celular.indexOf("iPhone") != -1){
    this.mudarTela();
    }
    },
    mudarTela: function(){
    var tela = document.getElementById("botoes-index");
    tela.style.flexDirection = "flex";
    }
}
    celular.indentificarCell();
function exibir_G() {
    if (S_geral.style.display === "none") {
        document.getElementById("S_geral").style.display = "block";
        document.getElementById("S_emocional").style.display = "none";
        document.getElementById("S_dentista").style.display = "none";

    } else {
        document.getElementById("S_geral").style.display = "none";
    }
}
function exibir_E() {
    if (S_emocional.style.display === "none") {
        document.getElementById("S_geral").style.display = "none";
        document.getElementById("S_emocional").style.display = "block";
        document.getElementById("S_dentista").style.display = "none";
    } else {
        document.getElementById("S_emocional").style.display = "none";
    }
}
function exibir_T() {
    if (T_geral.style.display === "none") {
        document.getElementById("T_geral").style.display = "block";
        document.getElementById("T_aposentadoria").style.display = "none";
    } else {
        document.getElementById("T_geral").style.display = "none";
    }
}
function exibir_A() {
    if (T_aposentadoria.style.display === "none") {
        document.getElementById("T_geral").style.display = "none";
        document.getElementById("T_aposentadoria").style.display = "block";
    } else {
        document.getElementById("T_aposetadoria").style.display = "none";
    }
}
function exibir_Edu() {
    if (Edu.style.display === "none") {
        document.getElementById("Edu").style.display = "block";
    } else {
        document.getElementById("Edu").style.display = "none";
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
function Saude() {
    document.getElementById("saude").style.display = "block";
    document.getElementById("trabalho").style.display = "none";
    document.getElementById("Educação").style.display = "none";
    document.getElementById("impostos").style.display = "none";
}
function Trabalho() {
    document.getElementById("saude").style.display = "none";
    document.getElementById("trabalho").style.display = "block";
    document.getElementById("Educação").style.display = "none";
    document.getElementById("impostos").style.display = "none";
}
function educação() {
    document.getElementById("saude").style.display = "none";
    document.getElementById("trabalho").style.display = "none";
    document.getElementById("Educação").style.display = "block";
    document.getElementById("impostos").style.display = "none";
}
function impostos() {
    document.getElementById("saude").style.display = "none";
    document.getElementById("trabalho").style.display = "none";
    document.getElementById("Educação").style.display = "none";
    document.getElementById("impostos").style.display = "block";
}
function exibir_I() {
    if (Direito_tri.style.display === "none") {
        document.getElementById("Direito_tri").style.display = "block";
    } else {
        document.getElementById("Direito_tri").style.display = "none";
    }
}