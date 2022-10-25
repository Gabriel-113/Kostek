let header = document.querySelector('header')
let up = document.getElementById('up')
let root = document.documentElement;

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


const proyectos = document.getElementsByClassName('proyectos')
for (const proyecto of proyectos) {
    proyecto.addEventListener('click', ()=> {
        const modal = document.getElementById('contenedor_carrusel')
        fetch('proyectos.json').then((response) => {
                return response.json();
        }).then((proyectos_json) => {
            new Carousel_(modal, proyectos_json[proyecto.id].imagenes);
        }); 
    })
}
