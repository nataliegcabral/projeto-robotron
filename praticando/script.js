const lista = document.querySelector('[data-lista]');

const mostrar = document.querySelector('#mostrar');
const esconder = document.querySelector('#esconder');

function mostrarTintas () {
    lista.style.display = 'block'
}

mostrar.addEventListener('click', mostrarTintas);


function esconderTintas () {
    lista.style.display = 'none'
}

esconder.addEventListener('click', esconderTintas);




// document.querySelector('#botao').addEventListener('click', () => {
//     lista.setAttribute('data-lista', 'mostrar');
// })

// document.querySelector('.close').addEventListener('click', () => {
//     lista.setAttribute('data-lista', 'esconder');
// })
