// Obtenemos las tarjetas y los indicadores
const cards = document.querySelectorAll(".presentation");
const indicators = document.querySelectorAll(".indicator");

let currentCardIndex = 0; // Índice de la tarjeta actual

// Función para mostrar la siguiente tarjeta
function showNextCard() {
  // Ocultamos la tarjeta actual
  cards[currentCardIndex].classList.add("d-none");

  // Actualizamos el índice de la tarjeta actual
  currentCardIndex = (currentCardIndex + 1) % cards.length;

  // Mostramos la siguiente tarjeta
  cards[currentCardIndex].classList.remove("d-none");

  // Actualizamos el indicador activo
  indicators.forEach((i) => i.classList.remove("active"));
  indicators[currentCardIndex].classList.add("active");
}

// Agregamos un controlador de clic para cada indicador
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    // Ocultamos todas las tarjetas
    cards.forEach((card) => card.classList.add("d-none"));

    // Mostramos la tarjeta correspondiente al indicador seleccionado
    cards[index].classList.remove("d-none");

    // Quitamos la clase 'active' de todos los indicadores
    indicators.forEach((i) => i.classList.remove("active"));

    // Agregamos la clase 'active' solo al indicador seleccionado
    indicator.classList.add("active");

    // Actualizamos el índice de la tarjeta actual
    currentCardIndex = index;
  });
});

// Configurar el cambio automático de tarjetas cada 5 segundos
const interval = setInterval(showNextCard, 4000);

// Detener el intervalo al pasar el mouse sobre una tarjeta
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  card.addEventListener("mouseleave", () => {
    interval = setInterval(showNextCard, 5000);
  });
});
