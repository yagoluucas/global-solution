window.addEventListener('DOMContentLoaded', () => {

    const eventosToque = ['click', 'touchstart']

    // codigo abaixo é feito para fazer o calculo de quantidade de agua
    function calcularConta() {
        const btnEnviar = document.querySelector('.js-btn-resultado');
        const paragrafoMostraCalculo = document.querySelector('.js-mostar-calculo');
        const mostrarQuiz = document.querySelector('.js-mostrar-quiz')
        eventosToque.forEach((e) => {
            btnEnviar.addEventListener(e, () => {
                const pesoInformado = document.querySelector('.js-valor-peso');
                console.log(pesoInformado.value.lenght)
                const peso = parseFloat(pesoInformado.value);
                if((peso < 0 || peso > 300) && pesoInformado.value.lenght) {
                    paragrafoMostraCalculo.innerHTML = `Por favor, digite um peso <span class="peso-invalido">Válido</span>`;
                }
                else {
                    let valorLitros = (peso * 35) / 1000;
                    let valorCopos = (peso * 35) / 250;
                    paragrafoMostraCalculo.innerHTML = `Você deve beber <span class="valor-agua">${valorLitros} litros de água,</span> que seria equivalente a <span class="valor-agua">${valorCopos.toFixed(2)} copos de 250ml de água</span>.`;
                    mostrarQuiz.classList.add('mostrar-quiz')
                    mostrarQuiz.innerHTML = `Quer saber se está tendo bons hábitos para se manter hidratado ? acesse nosso <span classe = ""><a href="quiz.html">Quiz</a> e responda as perguntas, vamos ficar hidratados juntos `
                }
        })
              
    })
    }

    calcularConta();
    // fim do calculo para validar quantidade de agua

    function mostrarHabitos(){
        const imagensHabitos = document.querySelectorAll('.icones-habitos img')
        const paragrafoHabitosRuins = document.querySelector('.js-mostar-informacoes-ruins')
        const paragrafoHabitosBons = document.querySelector('.js-mostar-informacoes-bons')
        
        eventosToque.forEach((e) => {
            imagensHabitos.forEach((imagem) => {
                imagem.addEventListener(e, () => {
                    const classeImagem = imagem.classList.value
                    switch(classeImagem){
                        case "js-bebidas-alcoolica":
                            paragrafoHabitosRuins.textContent = 'Não pode comer fast-food'
                            break
                        case "js-fast-food":
                            paragrafoHabitosRuins.textContent = 'Não pode sei lá'
                            break
                        case "js-sem-agua":
                            paragrafoHabitosRuins.textContent = 'Colocar texto sem agua'
                            break
                        case "js-roupa-calor": 
                            paragrafoHabitosRuins.textContent = 'Colocar texto roupa' 
                            break
                        case "js-beber-agua":
                            paragrafoHabitosBons.textContent = 'Colocar texto beber agua'
                            break
                        case "js-garrafa-agua":
                            paragrafoHabitosBons.textContent = 'Colocar texto ter garrafa de agua'  
                            break
                        case "js-frutas":
                            paragrafoHabitosBons.textContent = 'Colocar texto comer frutas'
                            break
                        case "js-relogio":
                            paragrafoHabitosBons.textContent = 'Colocar texto colocar alarme'
                            break
                              
                    }
    
                })
            })
        })
    }

    mostrarHabitos()
    

})