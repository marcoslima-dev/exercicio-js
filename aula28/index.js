//Objeto DATE
const data = new Date();
console.log(data.toString())

/*
Tipos de data - DataString 
ex:
*/
const data2 = new Date ('2021-11-5 20:30:30')
console.log(data2.toString())
//Formato de informar datas - Ano, mês, dia, hora,minutos,segundo,milisegundos

//Tipos de get com datas
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth() + 1); //Mês em javascript começa do 0
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minutos', data2.getMinutes());
console.log('Segundos', data2.getSeconds());
console.log('Milisegundos', data2.getMilliseconds());
console.log('Dia da semana', data2.getDay()); // 0-Domingo e 6-Sábado

/*
Para pegar a data atual sem precisar utilizar new usamos:
*/
console.log(Date.now())
/*Retorna um valor da data atual em milisegundos */



