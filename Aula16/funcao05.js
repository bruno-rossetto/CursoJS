//Forma recursiva

function fatorial(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorial(n - 1)
    }
}

var resultado = fatorial(8)

console.log(resultado)