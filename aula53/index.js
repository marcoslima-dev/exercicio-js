/*Oque é Closures? 
Basicamente, é a habilidade que a função tem de acessar seu escopo lexico


Neste caso ela pode acessar 3 escopos, o seu próprio escopo, o escopo da sua variável pai
e o escopo global
Ex:
*/

function returnFunction(name) {
    return function () {
        return name;
    };
};

const function1 = returnFunction ('Luffy')
const function2 = returnFunction ('Zoro')
/*Neste caso, são duas funções diferentes da mesma "fábrica" mas com contextos léxicos diferentes
*/