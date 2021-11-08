//For of

//For clássico -  geralmente como itéraveis (arrays ou strings)
//For in - Retorna o índice  ou chave ou chave (string, array ou objetos)
//For of - Retorna o valor em si (itéraveis, arrays ou strings)

//Iterar uma string com for
/*
FOR CLÁSSICO - Ele conta os índices de uma string
const equipeF1 = 'Mercedez'

for (let i = 0; i < equipeF1.length; i++) {
    console.log(equipeF1[i])
}
*/


//Em vez de retornar o índice, for of lê os índice porém retorna o valor
const outraEquipe = 'McLaren';

for (let valor of outraEquipe) {
    console.log(valor)
}

