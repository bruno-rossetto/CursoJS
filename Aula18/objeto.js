let amigo = {nome: 'Jose', sexo: 'M', peso: 85, engordar(p){
    console.log('Engordou')
    this.peso += p
}}


console.log(amigo)

console.log(`${amigo.nome} pesa ${amigo.peso}`)

amigo.engordar(0)


