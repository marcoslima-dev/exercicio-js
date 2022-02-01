/*
Object.keys() - Mostra as chaves do objeto dentro de um array
Object.freeze() - Congela um objeto impedindo que ele seja alterado
Object.defineProperty - Define ou altera uma propriedade 
Object.definePropeties - Define várias propriedades
Object.assign - copiar um objeto
Object.getOwnPropertyDescriptor() - revela as propriedades de um objeto
Object.values() - Valores do objeto em um array (sem as chaves)
Object.entries() - Separa propriedades em arrays
*/



//Métodos úteis para objetos
//Ex 1 - Cópiar objetos - útilizamos o spread operator (...), além de sobrescrever o produto podemos criar outras coisas
const produto = {
    nome:'Produto',
    preco:10
}
/*const caneca = {...produto,
    material:'porcelana',

};*/
//Podemos utilzar assign támbem
const copo = Object.assign({},produto, {material:porcelana})

outraCoisa.nome = 'Marcos Lima'
outraCoisa.preco = 110
console.log(caneca)
console.log(produto)
