function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        imagem.src = '/Aula13/ex013/img/fotoManhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        imagem.src = '/Aula13/ex013/img/fotoTarde.jpg'
        document.body.style.background = '#b9846f'

    }else {
        imagem.src = '/Aula13/ex013/img/fotoNoite.jpg'
        document.body.style.background = '#515154'

    }
}