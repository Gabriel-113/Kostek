class Carousel_ {

    constructor(padre, imagenes) {
        this.activo = 0;
        this.elements = [];

        padre.classList.add("carrusel_overlay")
        let container = document.createElement('div');
        container.classList.add('contenedor_carrusel')
        padre.appendChild(container);

        const closeButton = document.createElement('i');
        closeButton.classList.add('bi', 'bi-x-circle-fill', 'item_carrusel_close_button');
        padre.appendChild(closeButton);

        for (let i = 0; i < imagenes.length; i++) {
            let elementDiv = document.createElement('div');
            elementDiv.classList.add('item_carrusel');
            let image = document.createElement('img');
            image.src = imagenes[i];
            elementDiv.appendChild(image);

            this.elements[i] = elementDiv;
            container.appendChild(elementDiv);
        }

        const nextAndPrevButton = document.createElement('div');
        nextAndPrevButton.classList.add('next_prev_buttons_carrusel');
        nextAndPrevButton.innerHTML = `
            <a class="prev"><i class="bi bi-arrow-left-square-fill"></i></a>
            <a class="next"><i class="bi bi-arrow-right-square-fill"></i></a>
        `
        const nextButton = nextAndPrevButton.querySelector('.next');
        nextButton.addEventListener('click', (event) => {
            this.siguiente(event)
        });
        const prevButton = nextAndPrevButton.querySelector('.prev');
        prevButton.addEventListener('click', (event) => {
            this.anterior(event)
        });
        padre.appendChild(nextAndPrevButton);
        this.elements[this.activo].classList.add('activo');

        const cleanCarousel = () => {
            for (const element of this.elements) {
                element.remove();
            }
            closeButton.remove();
            nextAndPrevButton.remove();
            container.remove();
            padre.classList.remove("carrusel_overlay")
        }

        const removeListener = (event) => {
            if (!prevButton.contains(event.target) && !nextButton.contains(event.target) &&
                !container.contains(event.target)) {
                cleanCarousel();
                document.removeEventListener('mouseup', removeListener);
            }
        };
        document.addEventListener('mouseup', removeListener);

        setTimeout(() => {
            container.style.opacity = '1';
        }, 50);
    }

    siguiente() {
        this.elements[this.activo].classList.remove('activo');
        ++this.activo;
        if (this.activo >= this.elements.length) {
            this.activo = 0;
        }

        this.elements[this.activo].classList.add('activo');
    }

    anterior() {
        this.elements[this.activo].classList.remove('activo');
        --this.activo;
        if (this.activo < 0) {
            this.activo = this.elements.length - 1;
        }

        this.elements[this.activo].classList.add('activo');
    }

}