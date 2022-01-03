//Parâmetros da função 
function falarOi () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total)
    
}
falarOi(1,2,3,4,5,6,7,8,9,10)


//Arguments sustenta todos os argumento enviados como parâmetro na exec da function(apenas para funções criadas com function)
//Podemos

//A sintaxe de parâmetro rest permite representar um número indefinido de argumentos como um array. No exemplo, usamos parâmetros rest para coletar argumentos do segundo argumento ao último. Então os multiplicamos pelo primeiro argumento. Neste exemplo é usado uma arrow function, que será introduzida na próxima seção.

function multiplicar(multiplicador, ...args) {
  return args.map(x => multiplicador * x);
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]