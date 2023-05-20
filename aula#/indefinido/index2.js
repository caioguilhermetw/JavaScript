// for in -> lê os indices ou chaves do objeto


const pessoa  = {
    nome:'luiz',
    sobrenome: 'guilher',
    idade:30,

};

for (let chave  in pessoa){
   console.log(chave, pessoa[chave]);

}
      
//               0        1      2
const frutas= ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}

/* for (let i=0; i < frutas.length; i++){
      console.log(frutas.[i]);
}

*/
