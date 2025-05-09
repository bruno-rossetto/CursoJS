function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        imagem.src = '/Aula13/ex013/img/fotoManhã.jpg'
    } else if(hora >= 12 && hora < 18){
        imagem.src = '/Aula13/ex013/img/fotoTarde.jpg'
    }else {
        imagem.src = '/Aula13/ex013/img/fotoNoite.jpg'
    }
}