function enviar(){
    let nome = document.getElementById('inputNome').value
    let idade = document.getElementById('inputIdade').value

    if(nome === '' || idade === ''){
        window.alert('Por favor, preencher todos os campos!')
    }
    let resultado = `Olá ${nome}, tudo bem? Você tem ${idade} anos.`

    document.getElementById('resultado').textContent = resultado
    nome.value = ''
    idade.value = ''
    nome.focus()
}