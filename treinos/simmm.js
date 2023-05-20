let botao = document.getElementById('bot');

botao.addEventListener('click', function(){ 
    
    let nome = document.getElementById('nome').value;
    let resp = document.getElementById('resp');

let a = `Eu ja to bolado ${nome} `;
resp.innerHTML = a;


})