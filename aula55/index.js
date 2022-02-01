//IIFE - Immediatly invoked function expression

/*Oque é IIFE? - É uma função protegida do escopo global e invocada imediatamente 
Ex:
Podemos utilizar parênteses e escrever novo código com funções anôninimas
*/
(function () {
    const personagem = 'Luffy';
    console.log(personagem);
})();  //<- A função está sendo executada imediatamente após ter seu código escrito
/*Se criarmos outra variável com o mesmo nome ela não irá interferir na nossa variável da função
pois nosso código está protegido pelo próprio escopo de sua função. 
Façamos o teste: */
const personagem = 'Luffy';
console.log(personagem);
