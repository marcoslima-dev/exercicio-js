/*
Dados primitivos(Imutaveis) - string, number, boolean, undefined, null, (bigint, symbol)
*/
let nome = 'Marcos'
nome = 'Lima'
console.log(nome)
//A string não foi modificada mas sim o valor da variavel que foi redeclarada

let a = 'A'
let b = a; 
console.log (a, b)
a = 'Outra coisa'
console.log (a,b)
/*
As variaveis A e B tem o valor independente uma da outra, se alterarmos o valor A para outro valor
B continuará com o valor inicial 
*/


//Dados por referencia (Mutavel) - array, objetct, function
let num1 = [1,2,3,]
let num2 = num1; 
console.log(num1,num2);
num1.push(4);
console.log(num1, num2)
/*
O valor de num1 e o valor num2 ocupam o mesmo valor na memória, se o valor de num1 for alterado 
o valor de num2 também será alterado
*/ 