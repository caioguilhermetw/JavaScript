//const tresHoras = 60 * 60 + 3 * 1000;
//const umDia = 60 * 60 24 * 1000;
//const data = new Date(2023, 3); // anos, mes, dia, hora, minutos, segundos, milesimos
const data = new Date('2023-03-30 18:14:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do zero
console.log('Ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 -  domingo, 6 - sabado
console.log( data.toString());
console.log(Date.now);