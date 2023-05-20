const pessoa = {
    nome:'Luiz',
    sobrenome: 'Otavio'

};

// For clássico- Geralmente com iteravei (arrays ou strings)
//For in - retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strings)

for (let i in pessoa) {
    console.log(pessoa[i]);
}
/*

for (let valor of pessoa ) {
    console.log(valor);
}

nomes.foreach(function(valor, indice, array) {
    console.log(valor, indice, array);
});*/