var display = 0;
var pilha = 0;
var sinal = "";

function numero(parametro){
    display = display * 10 + parseInt(parametro.id, 10);
    document.getElementById("display").value = display;
}

function operacao(parametro){
    pilha = display;
    display = 0;
    sinal = parametro.id;
    console.log(display);
}