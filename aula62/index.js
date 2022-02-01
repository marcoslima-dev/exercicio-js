//Arrays utilizam valores por referência

const nomes = ['Renatinho', 'Ronaldo', 'Rafael']

nomes[1] = 'Jãozin'
delete nomes[2]

console.log(nomes)