function soma (x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number' 
    ) {
        throw new Error ('x ou y precisam ser tipo numbers')
    } 

    return x + y;

}

try {
    console.log(soma(1,2))
    console.log(soma('1',2))
}catch (error) {
    console.log('Tu ta tentando somar uma string animal');
}