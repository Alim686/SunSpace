function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1; // Добавляем минимальный размер
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);

function getRandomPosition(element) {
    const x = Math.random() * (window.innerWidth - element.clientWidth);
    const y = Math.random() * (window.innerHeight - element.clientHeight);
    return { x, y };
}

function getRandomRotation() {
    return Math.random() * 360;
}

function moveAstronaut() {
    const astronaut = document.getElementById('astronaut');
    const { x, y } = getRandomPosition(astronaut);
    const rotation = getRandomRotation();
    astronaut.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}

document.addEventListener('DOMContentLoaded', () => {
    moveAstronaut();
    setInterval(moveAstronaut, 10000); // Перемещение каждые 20 секунд
});


function applyPressureEffect(event) {
    const content = document.querySelector('.content');
    const maxPressure = 200; // Максимальное смещение при "давлении"
    let xPressure, yPressure;

    if (event.type === 'click') {
        // Получаем координаты нажатия мыши
        xPressure = (event.clientX / window.innerWidth - 0.5) * maxPressure;
        yPressure = (event.clientY / window.innerHeight - 0.5) * maxPressure;
    } else if (event.type === 'touchstart') {
        // Получаем координаты касания
        const touch = event.touches[0];
        xPressure = (touch.clientX / window.innerWidth - 0.5) * maxPressure;
        yPressure = (touch.clientY / window.innerHeight - 0.5) * maxPressure;
    }

    // Проверка координат в консоли для отладки
    console.log('xPressure:', xPressure, 'yPressure:', yPressure);

    // Применяем смещение к блоку .content
    content.style.transform = `translate(${xPressure}px, ${yPressure}px)`;

    // Через 200 мс возвращаем блок в исходное состояние
    setTimeout(() => {
        content.style.transform = '';
    }, 200);
}

// Добавляем обработчики событий для мыши и сенсора
document.addEventListener('click', applyPressureEffect);
document.addEventListener('touchstart', applyPressureEffect);