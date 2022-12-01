const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')


//função anônima pode ser chamada por () => {} (arrow function)

const controle = document.querySelectorAll('[data-controle]')
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>  {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        
        //textContent é o value dos textos
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('.controle-contador')

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1  
    } else {
        peca.value = parseInt(peca.value) + 1 
    }
}


