const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    profi: 'dev',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);