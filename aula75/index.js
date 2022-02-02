//Manipulando Prototypes

const objA = {
    chaveA:'A'

};

const objB = {
    chaveB:'B'
}

Object.setPrototypeOf(objB, objA)

console.log(objB.chaveA)

function Produto (nome,preco) {
    this.nome = nome;
    this.preco =  preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco *(percentual / 100))
}
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100))
}