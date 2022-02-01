//defineProperty / definePropeties

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // true = Mostra a chave
        value : estoque, // valor da chave
        writable: false, // pode alterar o valor ou não
        configurable: true, // true = chave configurável
    });
}

const p1 = new Produto('Camiseta', 20,3);
console.log(p1);