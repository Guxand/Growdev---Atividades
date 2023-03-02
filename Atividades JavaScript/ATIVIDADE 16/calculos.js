/* Desenvolva aqui a rotina */
let valorBase;
let valorTransporte;
let valorAlimentacao;
let receitaTotal;

let valorAutomovel;
let faltas;
let descontoTotal;

let valorTotal;


window.addEventListener('load', function () {
    // Receita     
    valorBase = document.getElementById('valorBase');
    valorTransporte = document.getElementById('valorTransporte');
    valorAlimentacao = document.getElementById('valorAlimentacao');

    // Receita Total
    receitaTotal = document.getElementById('receitaTotal');

    // Descontos
    valorAutomovel = document.getElementById('valorAutomovel');
    faltas = document.getElementById('faltas');

    // Desconto Total
    descontoTotal = document.getElementById('totalDescontos');

    // Resultado final
    valorTotal = document.getElementById('valorTotal');

    // // Captura o click do botão calcular
    // document.getElementById('btnCalcular').addEventListener('click', function () {
    //     calcular();
    // });

    //
    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.addEventListener("blur", function () {
            calcular();
        });
    }

    // Buscar valores salvo no localStorage
    lerLocalStorage();
});

// Função para buscar no localstorage
function lerLocalStorage() {
    const inputs = document.getElementsByTagName('input');
    
    for (const input of inputs) {
        const valor = localStorage.getItem(input.id);

        // Se existe valor atualizamos caso contrário mantém 0
        if(valor) {
            input.value = valor;
        } else {
            input.value = "0";
        }
    }
}

// Função para salvar no localStorage
function salvarLocalStorage() {
    // const inputsUsandoQuerySector = document.querySelectorAll('input');
    const inputs = document.getElementsByTagName('input');    

   for (const input of inputs) {
        localStorage.setItem(input.id, input.value);
    }
}



function calcular() {
    // somatório das receitas
    const totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);

    // Atualiza o campo receita Total em tela
    receitaTotal.value = totalReceitas;

    // somatório dos descontos
    const totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);

    // Atualiza o campo desconto total em tela
    descontoTotal.value = totalDescontos;

    // resultado final
    const total = totalReceitas - totalDescontos;

    // Atualiza o campo total em tela
    valorTotal.value = total;

    // salvar no localStorage
    salvarLocalStorage();
}