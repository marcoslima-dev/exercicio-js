//Filtrando arrays
//Filter não altera o array original e sempre retorna um array do tamanho do array original ou menor
//Filtra elementos do array

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]



const numerosFiltrados = numeros.filter(valor => valor>10)
//console.log(numerosFiltrados)



//Retorne as pessoas com o nome com 6 letras ou mais
//Retorne as pessoas com mais de 18 anos
//Retorne as pessoas cujo nome termina com s

const pessoas = [
    {nome:'Marcos', idade:19},
    {nome:'Paloma', idade:18},
    {nome:'Geise', idade:18},
    {nome:'Macedo', idade:20},
]
const nomes = pessoas.filter( obj => obj.nome.length>=6)
const idade = pessoas.filter(obj =>obj.idade>18)
const terminaComS = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('s'))

console.log(nomes)
console.log(idade)
console.log(terminaComS)
