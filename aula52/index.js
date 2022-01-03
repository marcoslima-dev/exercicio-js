//Escopo léxico

const nome = 'Marcos'; 

/*A função conhece seu "vizinho", se chamamos uma variável que não está
em seu escopo, ela procura a variável no escopo pai (no caso o escopo global)
se ela não encontrar irá procurar no pai do seu pai (caso esteja dentro de o escopo de outra função por exemplo)
Caso ela não exista no escopo global ela retorna um erro
*/
function falaNome(){
    console.log(nome);
}
falaNome()

