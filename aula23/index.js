/*
Avaliações de curto-circuito 
&& - AND 
Valores FALSY - São valores que não são false literal mas apotam como false na execução do AND
Ex: 
0 - Zero
'' "" `` - Strings vázias
null / undefined
NaN
*/

//Teste com o AND 
function falarOi () {
    return 'Oi'
}

let execução = 'Jaumzin' 
/* A String 'Jaumzin' é lida pelo AND como true, logo, a função falarOi será executada.
Mas caso o valor de 'Jaumzin' seja trocado para algum valor Falsy ou false(false literal), AND retornará false
Lembrando que AND nescessita que todos os valores sejam true pra que seja retornado true
Faça o teste:
*/
console.log (execução && falarOi())

/* 
|| - OR 
O operador OR só precisa que um função seja verdadeira para que ele retorne true, 
ele sempre retornará o primeiro valor true que econtrar 

*/

//Teste com OR 
function falarOla () {
    return 'Olá'
}

let dizerOla = false || 'Mariazinha' || falarOla() || true ;
/*Se invertemos a posição da função falarOla pela string 'Mariazinha', a string será executad primeiro 
pois é o primeiro valor true que OR econtrou, mesmo que logo a seguir tenha um true,
ele apeanas procura o primeiro valor true e finliza a operação logo após econtra-lo.
*/
console.log (dizerOla)

// Outro exemplo 

const corDeFundo = null; 
const corDeFundoUser = corDeFundo || 'Preto'
console.log(corDeFundoUser)
/*Neste exemplo a const 'corDeFundo' está como uma variável indefinida, 
e no caso o valor a ser considerado como true pelo OR é a string 'Preto'. 
Mas se trocarmos null por outra string como 'Vermelho' OR irá retornar 'Vermelho',
pois foi o primeiro valor true que encontrou.
*/