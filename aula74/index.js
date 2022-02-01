//Função construtora - molde (classe)
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sonrenome = sobrenome;
    this.nomeCompleto = () => 'Original'
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + '' + this.sobrenome;
};

//Instância 
const pessoa1 = new Pessoa ('Marcos', 'Lima')

console.dir(pessoa1)