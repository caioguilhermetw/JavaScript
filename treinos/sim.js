function uau(){
    let nome = document.getElementById('1').value;
    let idade = document.getElementById('2').value;
    let profissão = document.getElementById('3').value;
    let resposta = document.getElementById('r')


function criaPessoa (nome, idade,  profissão) {
    return { nome:nome, idade:idade, profissão:profissão};
    
}

const pessoa1 = criaPessoa(nome, idade, profissão);



resposta.innerHTML = (` Seu nome é ${pessoa1.nome} sua idade é  ${pessoa1.idade} anos e  sua futura profissão é ${pessoa1.profissão}`);

}


/*
function uau(){
    let nome = document.getElementById('1').value;
    let idade = document.getElementById('2').value;
    let profissão = document.getElementById('3').value;
    let resposta = document.getElementById('r')


    let objeto = {
        nome,
        idade,
        profissão,

    }
    
    
    function aaa(objeto){
       let a =` Seu nome é ${objeto.nome} sua idade é ${objeto.idade} anos, e você é ${objeto.profissão}. `;
        return a ;
    }
    
    
    let cu = aaa(objeto);

    resposta.innerHTML =  cu
    
    //console.log(`Isso aqui é a variael ->${cu}`);

}
*/
