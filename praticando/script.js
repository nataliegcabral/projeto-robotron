const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

calcular.addEventListener('click', (evento) => {
    resultado.innerHTML = 'fui clicado'
})