// Obtén una referencia al div del aside
const asideDiv = document.getElementById('myAside');
const burguer = document.getElementById('desplegable');

// Función para mostrar u ocultar el aside y actualizar el ícono
function toggleAside() {
    asideDiv.classList.toggle('w-0');
    burguer.classList.toggle('bi-list');
    burguer.classList.toggle('bi-arrow-bar-left','p-6','ml-52','mb-[4rem]');
    burguer.classList.toggle('ml-52');
    burguer.classList.toggle('mb-4');
}

// Agrega un event listener al elemento en el que haces clic para mostrar u ocultar el aside
burguer.addEventListener('click', () => {
    toggleAside();
});

// Agrega un event listener al documento para ocultar el aside cuando se haga clic en otra parte del HTML
document.addEventListener('click', (event) => {
    if (!asideDiv.contains(event.target) && !burguer.contains(event.target) && !asideDiv.classList.contains('w-0')) {
        toggleAside();
    }
});
