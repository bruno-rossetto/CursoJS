let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}



function colocarNumero(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já adicionado a lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total


        resultado.innerHTML = ``
        resultado.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`
        resultado.innerHTML = `<p>O maior número informado é ${maior}</p>`
        resultado.innerHTML = `<p>O menor número informado é ${menor}</p>`
        resultado.innerHTML = `<p>A soma dos valores informados é ${soma}</p>`




    }
}