//Reduce - reduz o array a um elemento apeanas

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function (acumulador,valor) {
    acumulador += valor
    return acumulador   
},0)

//console.log(total)



const pessoas = [
    {nome:'Marcos', idade:19},
    {nome:'Paloma', idade:18},
    {nome:'Geise', idade:18},
    {nome:'Macedo', idade:20},
]

const maisVelha = pessoas.reduce(function (acumulador,valor){
    if(acumulador.idade>valor.idade) return acumulador ;
    return valor;
})
console.log(maisVelha)