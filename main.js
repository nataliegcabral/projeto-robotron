const robotron = document.querySelector('.robo')

//função anônima pode ser chamada por () => {} (arrow function)
robotron.addEventListener('click', (evento) => {
    console.log(evento)
})

function dizOi (nome) {
    console.log('oi ' + nome)
    console.log('Bem-vindo ao Robotron 2000')
}

dizOi('pedro')