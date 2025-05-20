function contar(){
    let inicio = document.getElementById('inicioContador')
    let fim = document.getElementById('fimContador')
    let passo = document.getElementById('passoContador')
    let resultado = document.getElementById('resultado')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        resultado.innerHTML = "Impossível contar!"
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
            resultado.innerHTML += ` ${c} `
            }
        }else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} `
            }
        }

        
    }
}