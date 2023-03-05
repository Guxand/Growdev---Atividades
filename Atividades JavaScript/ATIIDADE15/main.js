const cadastrar = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const nome = form.nome.value;
    const endereco = form.endereco.value;
    const cidade = form.cidade.value;
    const estado = form.estado.value;
    const cargo = form.cargo.value;
    const areaDeInteresse = form.areaDeInteresse;
    //filtra os inputs do tipo checkbox que estão marcados
    const areaDeInteresseMarcados = Array
        .from(areaDeInteresse)
        .filter((input) => input.checked);
    //cria um array com os valores dos inputs do tipo checkbox que estão marcados
    const areaDeInteresseMarcadosValores = areaDeInteresseMarcados.map(
        (input) => input.value
    );
    const resumo = form.resumo.value;

    //mostra os dados no console
    console.log(
        `Nome: ${nome}
Endereço: ${endereco}
Cidade: ${cidade}
Estado: ${estado}
Cargo: ${cargo}
Área de Interesse: ${areaDeInteresseMarcadosValores}
Resumo: ${resumo}`
    );
}

const limpar = (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    form.reset();
    form.nome.focus();
}

const botaoLimpar = document.querySelector('#btnLimpar');
botaoLimpar.addEventListener('click', limpar);