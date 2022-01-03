//Return de uma função 
//Oque faz: -Retorna um valor
//-Termina a função

//Ex: a função deve retornar 7
function soma(a, b){
    return a + b;
}
console.log(soma(2,5))

//Funções úteis - não retornam nada mas fazem coisas úteis no código
//Ex:
/*
document.addEventListener('click', function(e){
    document.body.style.backgroundColor = 'red'    
});
*/
//Muda a cor do body com um click
//A função não retorna um valor, mas fazem alguma coisa

//Funções tábem podem criar objetos literáis 
//Ex: 
function criaPessoa(nome, sobrenome) {
    return{nome, sobrenome}
}
//Podemos atribuir os objetos criados a variáveis
//Ex:
const p1 = criaPessoa('Marcos', 'Lima')
console.log(p1)
//O exemplo acima é a mesma coisa que: 
const p2 = {nome:'Rafael', sobrenome:'Silva'}
console.log(p2)
/*Está variável cria um objeto, mas o primeiro modo é mais fácil,
pois criamos uma função que cria os obejtos para nós
*/

//Você pode criar uma função que retorna e cria uma função interna ao mesmo tempo
//Ex:
function criaMultiplicador(multiplicador) {
    return function (n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
console.log(duplica(2));