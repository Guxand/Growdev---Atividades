const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.setAttribute('style','background-color:#E16E0E')
});

const titulos = document.querySelectorAll('.titulo-card')
titulos.forEach(titulo => {
    titulo.innerHTML='Meu Card'
    titulo.style.color='#2b385b';
    titulo.style.margin='0 0 2em 0'
});

const textos = document.querySelectorAll('.descricao-card')
textos.forEach(texto => {
    texto.innerHTML='Descrição modificada pelo JavaScript'
    texto.style.color = '#fff'
    texto.style.margin = '0 0 2em 0'
    texto.style.width = '160px'
});

const btnEditar = document.querySelectorAll('.botao-editar')
btnEditar.forEach(botao => {
    botao.style.backgroundColor = '#008000'
    botao.style.padding = '0.5em'
    botao.style.borderRadius = '10px'
    botao.style.border = 'none'
    botao.style.cursor = 'pointer'
    botao.style.color = '#fff'

    botao.addEventListener('click',()=>{
        alert("Clicou em Editar!")
    })
});
const btnApagar = document.querySelectorAll('.botao-apagar')
btnApagar.forEach(botao => {
    botao.style.backgroundColor = '#FF0000'
    botao.style.padding = '0.5em'
    botao.style.borderRadius = '10px'
    botao.style.border = 'none'
    botao.style.cursor = 'pointer'
    botao.style.color = '#fff'

    botao.addEventListener('click',()=>{
        const certeza = confirm('Tem certeza da exclusão?')
        if (certeza) {
            alert('Confirmado!')
        } else {
            alert('Cancelou!')
        }
    })
});