let botao = document.getElementById('bot');

botao.addEventListener('click', function(){ 
    
    let nome = document.getElementById('nome').value;
    let resp = document.getElementById('resp');

let a = `Eu  ${nome}  estou estoicicado `;
resp.innerHTML = `Essa é a resposta certo pae -> ${a}`;


})