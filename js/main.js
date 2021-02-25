var display = 0;
var pilha = 0;
var produto = 0;
var sinal = "";
var flagOp = true;

function numero(parametro){
    display = display * 10 + parseInt(parametro.id, 10);
    document.getElementById("display").value = display;
    flagIgual=false;
    llog("numero");
}

function operacao(parametro){
    pilha = display;
    if (display != null){
        igual("operacao");
    }
    display = null;
    sinal = parametro.id;
    llog("operacao");
}

function igual(){
    if (sinal == "+"){
        produto = pilha + display}
    else if (sinal == "-"){
        produto = pilha - display}
    else if (sinal == "x"){
        produto = pilha * display}
    else if (sinal == "/"){
        produto = pilha / display;
    }
    document.getElementById("display").value = produto;
    llog("=");
}

function c(){
    display = 0;
    pilha = 0;
    produto = 0;
    sinal="";
    flagIgual = true;
    document.getElementById("display").value = produto;
    llog("c");
}

function llog(par){
    console.log(par + " _____");
    console.log("display: " + display)
    console.log("pilha:   " + pilha);
    console.log("produto: " + produto);
    console.log('sinal: " ' + sinal +'"');
}   console.log("flagOp:  " + flagOp);
