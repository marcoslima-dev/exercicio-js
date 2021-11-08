//Atribuição via desestruturação (objeto)
const pessoa = {
    nome :'Marcos',
    sobrenome :'Lima',
    idade:18 + ' Anos',
    endereco: {
        rua: 'Saci',
        numero:7812
    }
};

const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade)