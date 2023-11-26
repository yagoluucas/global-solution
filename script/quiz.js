window.addEventListener('DOMContentLoaded', () => {
    const eventosToque = ['click', 'touchend']

    eventosToque.forEach((evento) => {
            const btnEnviar = document.querySelector('.js-btn-quiz')
            const primeiraResposta = document.querySelector('.js-resultado-1')
            const segundaResposta = document.querySelector('.js-resultado-2')
            const terceiraResposta = document.querySelector('.js-resultado-3')
            const quartaResposta = document.querySelector('.js-resultado-4')
            const quintaResposta = document.querySelector('.js-resultado-5')
            const quantidadeAcertada = document.querySelector('.js-quantidade-acertada')
            const nenhumaResposta = document.querySelector('.js-respondeu-nenhum')
            btnEnviar.addEventListener(evento, () => {
                const respostasEscolhidas = document.querySelectorAll('input[type="radio"]:checked')
                const containerResultado = document.querySelector('.js-container-resultado')
                const divIconesNav = document.querySelector('.js-icones-navegacao')
                let escolhasCertas = 0;
                
                if(respostasEscolhidas.length == 5) {
                    if(respostasEscolhidas[0].value == 'Agua') {
                        primeiraResposta.classList.remove('resposta-incorreta')
                        primeiraResposta.classList.add('resposta-correta')
                        primeiraResposta.textContent = 'Correto, a agua nesse caso seria a melhor opção!';
                        escolhasCertas++
                    } else {
                        primeiraResposta.classList.add('resposta-incorreta')
                        primeiraResposta.textContent = `Incorreto! ${respostasEscolhidas[0].value} não seria a melhor opção`
                    }

                    if(respostasEscolhidas[1].value == 'Mais Agua') {
                        segundaResposta.classList.add('resposta-correta')
                        segundaResposta.textContent = 'Perfeito, assim voce se mantem muito bem hidratado'
                        escolhasCertas++
                    } else if(respostasEscolhidas[1].value == 'Igual') {
                        segundaResposta.classList.add('resposta-mediana')
                        segundaResposta.textContent = 'É um bom começo, porém voce ainda precisa reduzir, seu consumo de agua precisa ser superior'
                        escolhasCertas += 0.5
                    } else {
                        segundaResposta.classList.add('resposta-incorreta')
                        segundaResposta.textContent = 'Não é um bom hábito visto que café e bebida alcóolica pode causar desidratação'
                    }

                    if(respostasEscolhidas[2].value == 'Bone, Regata e Bermuda') {
                        terceiraResposta.classList.add('resposta-correta')
                        terceiraResposta.textContent = 'Isso mesmo, essa seria a melhor opção nesse caso e não esqueça do protetor solar!'
                        escolhasCertas++
                    } else {
                        terceiraResposta.classList.add('resposta-incorreta')
                        terceiraResposta.textContent = 'Nesse caso seria não seria uma escolha muito boa, você poderia ficar desidratado'
                    }

                    if(respostasEscolhidas[3].value = 'Sempre') {
                        quartaResposta.classList.add('resposta-correta')
                        quartaResposta.innerHTML = 'Muito bem! alimentos como frutas e legumes geralmente contém muita água te deixando hidratado, você pode ver alguns alimentos que hidratada clicando <a href="https://www.capesesp.com.br/alimentos-que-hidratam" target="_blank">aqui</a>'
                        escolhasCertas++
                    } else if(respostasEscolhidas[3].value = 'As vezes') {
                        quartaResposta.classList.add('resposta-mediana')
                        quartaResposta.innerHTML = 'Parabens, porém voce precisa comer alimentos como frutas e legumes para se manter hidratado, voce pode ver mais informações clicando <a href="https://www.capesesp.com.br/alimentos-que-hidratam" target="_blank">aqui</a>'
                        escolhasCertas+= 0.5
                    } else {
                        quartaResposta.classList.add('resposta-incorreta')
                        quartaResposta.innerHTML = 'Poxa, você precisa comer esse tipo de alimento pois ele vai te ajudar a se manter hidratado, clique <a href="https://www.capesesp.com.br/alimentos-que-hidratam" target="_blank">aqui</a> e veja alguns deles'
                    }

                    if(respostasEscolhidas[4].classList.contains('correta')) {
                        quintaResposta.classList.add('resposta-correta')
                        quintaResposta.textContent = 'Parabens, a melhor forma de você se manter hidratado é bebendo água e para isso não é necessario estar com sede'
                        escolhasCertas++
                    } else {
                        quintaResposta.classList.add('resposta-incorreta')
                        quintaResposta.textContent = 'Para se manter hidratado é preciso beber, então lembre-se de ter isso na sua rotina, tenha uma garrafinha e beba agua varias vezes ao dia mesmo estando sem sede'
                    }
    
                    // codigo abaixo mostra a tabela de resultado (a pontuação do usuario)
                    if(escolhasCertas <= 1.5) {
                        quantidadeAcertada.innerHTML = `Sua pontuação foi : ${escolhasCertas}. Voce precisa melhorar seus hábitos para se manter saudavel, clique <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/noticias/?p=322034" target="_blank">aqui</a> e saiba mais`
                    } else if (escolhasCertas >= 2 && escolhasCertas <= 3){
                        quantidadeAcertada.innerHTML = `Sua pontuação foi : ${escolhasCertas}. Você esta no caminho certo para ter uma rotina com hábitos mais saudaveis em relação a hidratação, voce pode acessar o <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/noticias/?p=322034" target="_blank">link</a> para ter boas dicas de como se manter mais hidratado`
                    } else {
                        quantidadeAcertada.innerHTML = `Sua pontuação foi : ${escolhasCertas}. Meus parabéns, voce tem uma boa rotina para se manter saudavel, caso queria saber mais clique <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/noticias/?p=322034"target="_blank">aqui</a>`
                    }
                    divIconesNav.style.marginBottom = '5px';
                    nenhumaResposta.textContent = ''
                    containerResultado.classList.remove('none')
                    
                } else {
                    nenhumaResposta.textContent = "Responda todas as perguntas antes de continuar"
                }
            })

            // codigo abaixo é para navegar entre os itens

            const anterior = document.querySelector('.js-anterior')
            const proximo = document.querySelector('.js-proximo')

            proximo.addEventListener(evento, () => {
                const perguntaAparecendo = document.querySelector('.js-pergunta-aparecendo')
                if(perguntaAparecendo.getAttribute('data-pergunta') != 'ultima-pergunta') {
                    perguntaAparecendo.classList.add('none')
                    perguntaAparecendo.nextElementSibling.classList.remove('none')
                    perguntaAparecendo.classList.remove('js-pergunta-aparecendo')
                    perguntaAparecendo.nextElementSibling.classList.add('js-pergunta-aparecendo')
                }
                if(perguntaAparecendo.getAttribute('data-pergunta') == 'penultima-pergunta'){
                    btnEnviar.classList.remove('none')
                }
            })

            anterior.addEventListener(evento, () => {
                const perguntaAparecendo = document.querySelector('.js-pergunta-aparecendo')
                if(perguntaAparecendo.getAttribute('data-pergunta') != 'primeira-pergunta'){
                    perguntaAparecendo.previousElementSibling.classList.remove('none')
                    perguntaAparecendo.previousElementSibling.classList.add('js-pergunta-aparecendo')
                    perguntaAparecendo.classList.add('none')
                    perguntaAparecendo.classList.remove('js-pergunta-aparecendo')
                }
            })
    })

})