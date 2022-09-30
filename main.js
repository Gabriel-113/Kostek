let header = document.querySelector('header')
let up = document.getElementById('up')
let root = document.documentElement;
let carrusel = document.getElementsByClassName('proyectos')[0]

window.addEventListener('scroll', () => {

    let scroll = window.scrollY
    if (scroll > 0) {
        header.style.background = '#252850d2'
        root.style.setProperty('--header-size', '100px')
    } else {
        header.style.background = ''
        root.style.setProperty('--header-size', '')
    }
    if (scroll > 300) {
        up.style.display = ''
    } else {
        up.style.display = 'none'
    }
})

carrusel.addEventListener('click', ()=> {
    let modal = document.getElementById('contenedor_carrusel')
    modal.style.display = ''
})


