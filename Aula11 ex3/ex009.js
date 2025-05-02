var txtv = document.getElementById('txtvel')
var res = document.getElementById('res')

function calcular(){

    var vel = Number(txtv.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h<strong/></p>`

    if(vel > 60){
        res.innerHTML += `<p>Você está sendo <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }else{
        res.innerHTML += `<p>Você está dentro do limite de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}