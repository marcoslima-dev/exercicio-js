//Declaração de função (Function Hoisting)
//Hoisting -  O JS eleva as declarações de função e variaveis com var para o topo do document
falarOi()
//A função foi chamada antes de ser declarada mas não ocorre problema por causa do hoisting
function falarOi() {
    console.log('Oi')
}
//First-class objects (Objetos de primeira classe)
//Podemos tratar função como um dado
const souUmDado = function() {
    console.log('Sou um dado :)')
}
souUmDado()
//Uma constante está recebendo uma função como dado

//Arrow function - é uma function express mais curta 
const arrowFunction = () => {
    console.log('Sou um arrow function :)')
}
arrowFunction()

//Function dentro de objetos 
const obj = {
    falar() {
        console.log('Sou uma função que fala :)')
    }
}
obj.falar();