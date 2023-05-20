/*try {
    console.log(naoExisto);
} catch(err) {
    console.log ('naoExisto não existe.');
    console.log(err);
}*/

function soma(x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number')
         {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}

try {

    console.log(soma(1, 2));
    console.log(soma('1', 2));

} catch(error) {
    //console.log(error);
    console.log('Alguma coisa mais amigavel pro usuario');
}

// se ocurrer qualquer erro dentro do bloco try catch é executado, senão  ocorrer nenhum erro no try o bloco try é executado

