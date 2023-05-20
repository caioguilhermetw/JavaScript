const pessoa1 = {
    nome : 'Caio',
    sobrenome: 'Guilherme',
    idade: 19,
    
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);

    },

    incrementaIdade() {
        this.idade++;

    }
};
console.log(pessoa1.nome)
console.log(pessoa1.fala()) ;
pessoa1.incrementaIdade();

console.log(pessoa1.fala());
pessoa1.incrementaIdade();

console.log(pessoa1.fala());
pessoa1.incrementaIdade();
