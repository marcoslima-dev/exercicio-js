//defineProperty / definePropeties

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // true = Mostra a chave
        configurable: true, // true = chave configurável
        get:function(){
            return estoquePrivado;
        }, 
        set:function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('valor must be a number')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20,3);
p1.estoque = 500
console.log(p1.estoque);