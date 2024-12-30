const $mask = document.querySelector('.mask');
const $uncensor = document.querySelector('.uncensor');
const $container = document.querySelector('.container');
const $censor = document.querySelector('.censor');

// Función para mover el área descubierta y ajustar el fondo
const handleMouseMove = (event) => {
    const rect = $container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Mueve el área descubierta
    $mask.style.top = `${y - $uncensor.clientHeight / 2}px`;
    $mask.style.left = `${x - $uncensor.clientWidth / 2}px`;

    // Ajusta el fondo de la imagen no censurada
    const bgX = -((x / rect.width) * $censor.naturalWidth - $uncensor.clientWidth / 2);
    const bgY = -((y / rect.height) * $censor.naturalHeight - $uncensor.clientHeight / 2);

    $uncensor.style.backgroundPosition = `${bgX}px ${bgY}px`;
};

// Listeners para el movimiento del mouse
document.addEventListener('mousemove', handleMouseMove);
