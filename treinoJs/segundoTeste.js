let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let resultado2 = document.getElementById('resultado2')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function colocar(){
    if(isNumber(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O número colocado foi ${numero.value}.`
        lista.appendChild(item)
        resultado2.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já adicionado a lista!')
    }

    numero.value = ''
    numero.focus()
}

function enviar(){
    if(valores.length == 0){
        window.alert('Adicione valores para enviar!')
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

        resultado2.innerHTML = ''
        resultado2.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        resultado2.innerHTML += `<p>O maior número informado é ${maior}</p>`
        resultado2.innerHTML += `<p>O menor número informado é ${menor}</p>`
        resultado2.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`
        resultado2.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}