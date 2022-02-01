//Revisão de objetos

const pessoa = {
    nome:'Marcos',
    sobrenome:'Lima',
};

//console.log(pessoa['nome'])
//console.log(pessoa['sobrenome'])

const pessoa1 = new Object();
pessoa1.nome = 'Marcos'
pessoa1.sobrenome = 'Lima'
pessoa1.idade=20;
//console.log(pessoa1)

//Métodos

pessoa1.falarNome = function() {
    return(`Meu nome é ${this.nome}`)
}

pessoa1.getIdade = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
for (let chave in pessoa1) {
    console.log(pessoa1 [chave])
}
console.log(pessoa1.getIdade())
console.log(pessoa1.falarNome())


//Moldes de objetos - Factorys functions / Constructor functions / Classes
//Factory
function criaPessoas(nome,sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoas('Marcos', 'Lima')
console.log(p1.nomeCompleto())
//Constructor 
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 =  new Pessoa('Marcos','Lima Dev')
console.log(p2)