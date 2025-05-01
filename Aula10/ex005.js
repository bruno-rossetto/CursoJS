var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', saiu)



function clicar(){
    a.innerHTML = 'Clicou'
    a.style.background = 'red'
}

function entrou(){
    a.innerHTML = 'Entrou'
}

function saiu(){
    a.innerHTML= 'Saiu'
    a.style.background = 'green'
}