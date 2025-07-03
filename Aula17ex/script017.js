let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}



function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou já adicionado a lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adiciones valores para finalizar.')
    } else{
        let total = valores.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} nùmeros cadastrados.</p>`
        
    }
}