var display = 0
var pilha = 0
var sinal = ""
var calculado = "pronto"
var jaCalculado = false
var liberaNumeros = true
var vMemoria = 0
var mrc = false

function memoria(parametro){
    if (parametro.id == "M+"){
        vMemoria = vMemoria + parseInt(document.getElementById("display").value)
        mrc = false}
    else if (parametro.id == "M-"){
        vMemoria = vMemoria - parseInt(document.getElementById("display").value)
        mrc = false}
    else if (parametro.id == "MRC"){
        if (mrc){
            vMemoria = 0}
        else if (calculado == "calculado"){
            display = vMemoria
            document.getElementById("display").value = display
            calculado = "pronto"}
        else if (calculado == "viaBotao" || calculado == "pronto"){
            display = vMemoria
            pilha = 0
            document.getElementById("display").value = display
            calculado = "pronto"
            }
            mrc = true
        }
    
    liberaNumeros=true
    llog("memoria")
    }

function numero(parametro){
    if (calculado == "viaBotao"){
        display = 0
        pilha = 0
        sinal = ""
    }
    display = display * 10 + parseInt(parametro.id, 10)
    document.getElementById("display").value = display
    calculado="pronto"
    mrc = false
    llog("numero")
}

function operacao(parametro){
    if (calculado == "pronto"){
        igual("operacao")}
    else if(calculado == "viaBotao"){
        calculado = "pronto"
    }
    sinal = parametro.id
    mrc = false
    llog("operacao")
}

function igual(parametro){
    if (calculado != "pronto"){
        console.log("callback")}
    else {
        if (sinal == "+"){
            display = pilha + display}
        else if (sinal == "-"){
            display = pilha - display}
        else if (sinal == "x"){
            display = pilha * display}
        else if (sinal == "/"){
            display = pilha / display
        }
        document.getElementById("display").value = display
        pilha = display
        display = 0
        if (parametro == "viaBotao"){
            calculado = "viaBotao"}
        else{
            calculado = "calculado"}
        
    mrc = false
    llog("=")
    }
}

function c(){
    display = 0
    pilha = 0
    sinal=""
    calculado = "pronto"
    document.getElementById("display").value = 0.0
    mrc = false
    llog("c")
}

function llog(par){
    console.log(`- - - ${par} - - -`)
    console.log(`display:       ${display}`)
    console.log(`pilha:         ${pilha}`)
    console.log(`sinal:       "${sinal}"`)
    console.log(`jaCalculado:   ${jaCalculado}`)
    console.log(`liberaNumeros: ${liberaNumeros}`)
    console.log(`vMemoria:      ${vMemoria}`)
    console.log(`calculado:     ${calculado}`)
    console.log(`mrc:           ${mrc}`)
}