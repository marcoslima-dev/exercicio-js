//Arrays utilizam valores por referência

const nomes = ['Renatinho', 'Ronaldo', 'Rafael']

nomes[1] = 'Jãozin'
delete nomes[2]

console.log(nomes)


/*Métodos de arrays - slice: separa elementos do array de acordo com o 
número de índices informados.
split: transforma uma string em um array e separa seus índices se acordo com o valor 
informado (espaço, vírgula e etc)
join: transforma um array em uma string 

... -> operador spread - copia um array

funções- pop: remover o último índice do array
shift - remover um item do primeiro índice do array
unshift - adicionar um item no começo do array
push - adicionar um elemento no fina do array

*/