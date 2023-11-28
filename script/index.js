window.addEventListener('DOMContentLoaded', () => {

    const eventosToque = ['click', 'touchstart']

    // codigo abaixo é feito para fazer o calculo de quantidade de agua
    function calcularConta() {
        const btnEnviar = document.querySelector('.js-btn-resultado');
        const paragrafoMostraCalculo = document.querySelector('.js-mostar-calculo');
        const mostrarQuiz = document.querySelector('.js-mostrar-quiz')
        const formulario = document.querySelector('.form-conta')

        formulario.addEventListener('change', () => {
            const pesoInformado = document.querySelector('.js-valor-peso');
            if(pesoInformado.value.length == 0) {
                btnEnviar.setAttribute('disabled', 'true')
                // btnEnviar.classList.add('btn-disabled')
                btnEnviar.setAttribute('title', 'Informe um valor')
            } else {
                btnEnviar.removeAttribute('disabled')
                // btnEnviar.classList.remove('btn-disabled')
                btnEnviar.removeAttribute('title')
                eventosToque.forEach((e) => {
                    btnEnviar.addEventListener(e, () => {  
                        const peso = parseFloat(pesoInformado.value);  
                        if(peso <= 0 || peso> 300) {
                            paragrafoMostraCalculo.innerHTML = `Por favor, digite um peso <span class="peso-invalido">Válido</span>`;
                        } else {
                            let valorLitros = (peso * 35) / 1000;
                            let valorCopos = (peso * 35) / 250;
                            paragrafoMostraCalculo.innerHTML = `Você deve beber <span class="valor-agua">${valorLitros} litros de água,</span> que seria equivalente a <span class="valor-agua">${valorCopos.toFixed(2)} copos de 250ml de água</span>.`;
                            mostrarQuiz.classList.add('mostrar-quiz')
                            mostrarQuiz.innerHTML = `Quer saber se está tendo bons hábitos para se manter hidratado ? acesse nosso <span classe = ""><a href="quiz.html">Quiz</a> e responda as perguntas, vamos ficar hidratados juntos `
                        }
                })
            })
            }
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
                            paragrafoHabitosRuins.innerHTML = '<span class="habitos-texto-icones">Bebidas alcóolicas</span> podem levar a desidratação, por isso voce deve evitar o seu consumo'
                            break
                        case "js-fast-food":
                            paragrafoHabitosRuins.innerHTML = '<span class="habitos-texto-icones">Alimentos industrializados</span> como por exemplos os de fast food contém muito sal e açucar podendo causar desidratação'
                            break
                        case "js-sem-agua":
                            paragrafoHabitosRuins.innerHTML = '<span class="habitos-texto-icones">Não beber agua</span> é a principal causa de desidratação, se hidrate!'
                            break
                        case "js-roupa-calor": 
                            paragrafoHabitosRuins.innerHTML = '<span class="habitos-texto-icones">Usar roupas inapropriadas</span> em dias de muito calor como moletons e jaquetas pode te levar a desidratação' 
                            break
                        case "js-beber-agua":
                            paragrafoHabitosBons.innerHTML = '<span class="habitos-texto-icones">Beber agua</span> é a melhor forma de se manter hidratado'
                            break
                        case "js-garrafa-agua":
                            paragrafoHabitosBons.innerHTML = '<span class="habitos-texto-icones">Ter uma garrafa de agua</span> para ficar com você no dia a dia ajuda a lembrar você a beber agua é uma boa aposta para se manter hidratado'  
                            break
                        case "js-frutas":
                            paragrafoHabitosBons.innerHTML = '<span class="habitos-texto-icones">Comer alimentos com muita agua</span> como frutas e legumes ajuda você a se hidratar'
                            break
                        case "js-relogio":
                            paragrafoHabitosBons.innerHTML = '<span class="habitos-texto-icones">Programe um alarme</span>  para lembrar-se de tomar água; isso ajudará a manter-se hidratado'
                            break
                              
                    }
    
                })
            })
        })
    }

    mostrarHabitos()
    

})