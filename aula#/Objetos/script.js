function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('caio', 'guilherme', 19);
const pessoa3 = criaPessoa('Chuck', 'Neymar', 23);

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.sobrenome);
console.log(pessoa3.nome, pessoa3.sobrenome);

