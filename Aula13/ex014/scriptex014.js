function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var resultado = document.getElementById('resultado')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERROR]Verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('sexo')

        var idade = ano - Number(fAno.value)

        var genero = ''

        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                imagem.setAttribute('src', 'Aula13\ex014\img\criancaM.jpg')
            }else if(idade >= 10 && idade < 18){
                //adolecente
                imagem.setAttribute('src', 'Aula13/ex014/img/garoto.jpg')
            }else if(idade >= 18 && idade < 60){
                //adulto
                imagem.setAttribute('src', 'Aula13\ex014\img\homem.jpg')
            }else{
                //idoso
                imagem.setAttribute('src', 'Aula13\ex014\img\idoso.jpg')
            }
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                imagem.setAttribute('src', 'Aula13\ex014\img\criancaF.jpg')
            }else if(idade >= 10 && idade < 18){
                //adolecente
                imagem.setAttribute('src', 'Aula13\ex014\img\garota.jpg')
            }else if(idade >= 18 && idade < 60){
                //adulto
                imagem.setAttribute('src', 'Aula13\ex014\img\mulher.jpg')
            }else{
                //idoso
                imagem.setAttribute('src', 'Aula13\ex014\img\idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imagem)
    }

}