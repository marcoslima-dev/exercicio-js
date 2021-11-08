//Escreva uma função que recebe dois números e retorne o maior deles


function numeros(){
let num1 = Math.random(); 
let num2 = Math.random();
    if (num1 > num2) {
        console.log(`O primeiro número é o maior ${num1}`)
    } else {console.log(`O segundo número é o maior ${num2}`)}
}
numeros()