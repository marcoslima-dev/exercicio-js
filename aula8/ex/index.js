const nome = 'Marcos';
const sobrenome = 'Lima';
const idade = 18;
const peso = 60;
const alturaEmM = 1.67;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de: ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)