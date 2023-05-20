let objeto = {
    aluno:'caio',
    idade:19,
    gosto:'rock',
}


function aaa(objeto){
   let a =` olhe o resultado disso é ${objeto.idade + 1}`
    return a
}


let cu = aaa(objeto);

console.log(`Isso aqui é a variael ->${cu}`);
