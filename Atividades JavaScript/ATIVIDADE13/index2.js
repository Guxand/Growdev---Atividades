let contador = 0
let contadorHtml = document.getElementById("contador")

document.getElementById("incrementar").addEventListener("click", function (){
  contadorHtml.parentElement.style.display = "block"
   contadorHtml.innerHTML= `${++contador}`
})

document.getElementById("zerarContador").addEventListener("click", function(){
    contador = 0 
    contadorHtml.parentElement.style.display = "none"
})



// let contador = 1
// document.getElementById('btn-increment').addEventListener('click', function() {
//     document.getElementById('p-paragrafo').innerHTML = `O contador está com ${contador} cliques`;
//     contador++
// })


// const zerar = document.getElementById('btn-zerar').addEventListener('click', function() {
//     document.getElementById('p-paragrafo').innerHTML = ''
//     contador = 1
// })