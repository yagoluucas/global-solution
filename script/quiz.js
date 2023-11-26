window.addEventListener('DOMContentLoaded', () => {
    const eventosToque = ['click', 'touchstart']
    const btnEnviar = document.querySelector('.js-btn-quiz')
    const primeiraResposta = document.querySelector('.js-resultado-1')
    const quantidadeAcertada = document.querySelector('.js-quantidade-acertada')
    eventosToque.forEach((evento) => {
        btnEnviar.addEventListener(evento, () => {
            const respostasEscolhidas = document.querySelectorAll('input[type="radio"]:checked')
            let escolhasCertas = 0;
            if(respostasEscolhidas.length > 0) {
                if(respostasEscolhidas[0].value == 'Agua') {
                    primeiraResposta.classList.add('resposta-correta')
                    primeiraResposta.textContent = 'Correto, a agua nesse caso seria a melhor opção!';
                    escolhasCertas++
                } else {
                    primeiraResposta.classList.add('resposta-incorreta')
                    primeiraResposta.textContent = `Incorreto! ${respostasEscolhidas[0].value} não seria a melhor opção`
                }

                if(escolhasCertas == 1) {
                    quantidadeAcertada.textContent = `Você acertou ${escolhasCertas} pergunta, vá até o inicio da pagina para ver as informações`
                } else {
                    quantidadeAcertada.textContent = `Você acertou ${escolhasCertas} perguntas, vá até o inicio da pagina para ver as informações`
                }
                
            } else {
                quantidadeAcertada.textContent = "Você não respondeu nenhuma pergunta!"
            }
        })
    })

})