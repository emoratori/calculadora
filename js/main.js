var display = 0;
var pilha = 0;
var sinal = "";
var calculado = "pronto";

function numero(parametro){
    if (calculado == "viaBotao"){
        display = 0;
        pilha = 0;
        sinal = "";
    }
    display = display * 10 + parseInt(parametro.id, 10);
    document.getElementById("display").value = display;
    calculado="pronto";
    llog("numero");
}

function operacao(parametro){
    if (calculado == "pronto"){
        igual("operacao")}
    else if(calculado == "viaBotao"){
        calculado = "pronto";
    }
    sinal = parametro.id;
    llog("operacao");
}

function igual(parametro){
    if (calculado != "pronto"){
        console.log("callback")}
    else {
        if (sinal == "+"){
            display = pilha + display;}
        else if (sinal == "-"){
            display = pilha - display;}
        else if (sinal == "x"){
            display = pilha * display;}
        else if (sinal == "/"){
            display = pilha / display;;
        }
        document.getElementById("display").value = display;
        pilha = display;
        display = 0;
        if (parametro == "viaBotao"){
            calculado = "viaBotao"}
        else{
            calculado = "calculado"}
        
        llog("=");
    }
}

function c(){
    display = 0;
    pilha = 0;
    sinal="";
    calculado = "pronto";
    document.getElementById("display").value = 0.0;
    llog("c");
}

function llog(par){
    console.log(" ---"+  par + " ---");
    console.log("display:   " + display)
    console.log("pilha:     " + pilha);
    console.log('sinal:    "' + sinal +'"');
    console.log("calculado: " + calculado);
}