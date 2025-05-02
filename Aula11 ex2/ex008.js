var identificador = document.getElementById('identificador')
var resultado = document.getElementById('resultado')

function verificar(){
    var pais = identificador.value

    resultado.innerHTML += `<p>Seu país de origem é ${pais}</p>`

    if(pais == 'Brasil'){
        resultado.innerHTML += `<p>Você é Brasileiro</p>`

    }else{
        resultado.innerHTML += `<p>Você é gringo</p>`

    }

    resultado.innerHTML += `<p>Pra gringo é mais caro!</p>`
    
}

