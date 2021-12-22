//Modificación de barra de navegación por desplazamiento
const barraDeNavegacion = document.querySelector('.barraDeNavegacion');

window.addEventListener('scroll', () => {
    const posicionDeDesplazamiento = window.scrollY;

    if(posicionDeDesplazamiento > 10) {
        barraDeNavegacion.classList.add('desplazada');
    }

    else {
        barraDeNavegacion.classList.remove('desplazada');
    }
});

//Indicador de sección visualizada
const secciones = document.querySelectorAll("section");

opciones = {
    threshold: 0.5
}

let observador = new IntersectionObserver(verificadorDeNavegacion, opciones);

function verificadorDeNavegacion(registros) {
    registros.forEach(registro => {
        const nombreDeClase = registro.target.className;
        const anclajeActivo = document.querySelector(`[data-page = ${nombreDeClase}]`);

        if(registro.isIntersecting) {
            anclajeActivo.classList.add('seccionVisualizada');
        }

        else {
            anclajeActivo.classList.remove('seccionVisualizada');
        }
    })
}

secciones.forEach(seccion => {
    observador.observe(seccion);
});