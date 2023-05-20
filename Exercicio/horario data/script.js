
var h1 = document.querySelector('.container h1'); //1
let data = new Date() 

function getDiaSemanaTexto(diaSemana){ //4
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) { //5
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'junho', 'julho', 'agosto', 'setembro', 'outobro', 'novembro', 'dezembro'];
    return meses [numeroMes]
}

function zeroAEsquerda (num) { //6

return num >= 10 ? num : `0${num}`;
}

function criaData(data) { //3
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return  ( //7
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ${data.getFullYear()} ` + `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}


h1.innerHTML = criaData(data); //2







/*
var d = document.querySelector('.container h1');

let data = new Date()
d.innerHTML = [`${getDiaSemanaTexto(data.getDay())} ${data.getDate()} de ${getMesTexto(data.getMonth())} de ${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()} horas`] ;

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto= 'Domingo';
            return  diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda';
            return  diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return  diaSemanaTexto;
         case 3:
            diaSemanaTexto = 'Quarta';
            return  diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return  diaSemanaTexto;
        case 5:
             diaSemanaTexto = 'Sexta';
             return  diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return  diaSemanaTexto;
        default:
            diaSemanaTexto = ''
    }

}

function getMesTexto(diaMes){
    let diaSemanaTexto;

    switch (diaMes) {
        case 0:
            diaSemanaTexto= 'Janeiro';
            return  diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Fevereiro';
            return  diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Março';
            return  diaSemanaTexto;
         case 3:
            diaSemanaTexto = 'Abril';
            return  diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Maio';
            return  diaSemanaTexto;
        case 5:
             diaSemanaTexto = 'Junho';
             return  diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Julho';
            return  diaSemanaTexto;
        default:
            diaSemanaTexto = ''
    }

}
*/

/*

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocalDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
*/

