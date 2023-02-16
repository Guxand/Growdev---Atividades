//alert('alo alo')

document.getElementById("botao").addEventListener("click", function(){
    const nomeDoUsuario = prompt("Digite seu nome");
    document.getElementById("paragrafo").innerHTML = `EAI ${nomeDoUsuario}! VOCÊ ESTÁ DEIXANDO SEU SITE DINÂMICO`
}) 