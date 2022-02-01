//Concatenando arrays
//Utilizamos o método concat ou o spread operator
const a1 = [1,2,3,4,];
const a2 = [5,6,7,8,]


//const a3 = a1.concat(a2);
const a3 = [...a1, ...a2]

console.log(a3)