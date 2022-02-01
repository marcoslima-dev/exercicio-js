//Funções geradores

function* formula1() {
    yield 'Mercedez'
    yield 'Red bull'
    yield 'McLaren'
}

const f1 = formula1();
console.log(f1.next().value)