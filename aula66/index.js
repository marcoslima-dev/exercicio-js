//Map retorna um array do mesmo tamanho do array original
//Altera elementos do array original

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosEmDobro = numeros.map (valor => valor*2)
//console.log(numerosEmDobro)



// Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome:'Marcos', idade:19},
    {nome:'Paloma', idade:18},
    {nome:'Geise', idade:18},
    {nome:'Macedo', idade:20},
]

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map( obj => ({idade:obj.idade}));
const id = pessoas.map(function(obj,indice){
    obj.id = (indice + 1) *1000;
    return obj;
})
console.log(nomes)
console.log(idades)
console.log(id)
