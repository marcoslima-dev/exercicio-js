//Função recursiva
//A função recursvisa executa seu própio código e se chama de volta
//A recursividade tem um certo limite para ser chamada, a partir de um certo número o js para de executar
function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++
    recursiva(max);
}

recursiva(0)