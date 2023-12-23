window.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.js-icone-menu')
    const links = document.querySelector('header nav ul')
    let eventos = ['click', 'touchend']
    eventos.forEach((e) => {
        btnMenu.addEventListener(e, () => {
            links.classList.toggle('mostrar')
            links.classList.toggle('ocultar')
            if(links.classList.contains('mostrar')){
                btnMenu.setAttribute('src', '../image/fechar.png')
                btnMenu.setAttribute('alt', 'icone para fechar o menu')
            } else {
                btnMenu.setAttribute('src', '../image/hamburger.png')
                btnMenu.setAttribute('alt', 'icone para abrir o menu')
            }
        })
    })
    
})