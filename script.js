function add(valor){

    let resultado = document.getElementById("resultado")
    
    resultado.value += valor
}

function limpar(){
    
    document.getElementById("resultado").value = ""

}

function calcular(operacao){

    let conta = document.getElementById("resultado").value

    let numeros = conta.split(/[\+\-\*\/]/)
    let n1 = Number(numeros[0])
    let n2 = Number(numeros[1])

    let res = operacao(n1, n2)

    document.getElementById("resultado").value = res
}

function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    return a / b
}

function verificar(){

    let conta = document.getElementById("resultado").value

if(conta.includes("+")){
    calcular(somar)
    }
    else if(conta.includes("-")){
    calcular(subtrair)
    }
    else if(conta.includes("*")){
    calcular(multiplicar)
    }
    else if(conta.includes("/")){
    calcular(dividir)
    }

}