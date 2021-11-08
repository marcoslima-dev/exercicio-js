//For in 

//For normal
/*
const equipesF1 = ['Mercedez', 'McLaren', 'Ferrarri']

for (let i = 0; i < equipesF1.length; i++) {
    console.log(equipesF1[i])
}
*/
//Este for criado conta e lista os índices do array, porém existe uma maneira de escrever menos código



const outrasEquipes = ['Redbull', 'Williams', 'Aston Martin']

for (let i in outrasEquipes) {
    console.log(outrasEquipes[i])
}


//For in - Lê os índices ou chave do objeto

//Maneiras de acessar um objeto com for in

const pessoa = {
    nome: 'Luffy',
    sobrenome: 'Monkey',
    idade: 19
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

//Usando colchetes podemos extrair a propriedade de um objeto e armazenarmos em uma variável de maneira dinâmica 