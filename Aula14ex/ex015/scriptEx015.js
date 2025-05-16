function contar(){
    var inicio = document.getElementById('inicioContador')
    var fim = document.getElementById('fimContador')
    var passo = document.getElementById('passoContador')
    var mensagemResultado = document.getElementById('resultado')
    var resultado = ''
    
    
    if(){

    for(var numero = inicio; numero <= fim; numero += passo){
        resultado += numero
    }
    console.log(resultado)
    return resultado
    }
}