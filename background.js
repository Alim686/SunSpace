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

function moveSpaceship() {
    const spaceship = document.getElementById('spaceship');
    const { x, y } = getRandomPosition(spaceship);
    const rotation = getRandomRotation();
    spaceship.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}

document.addEventListener('DOMContentLoaded', () => {
    moveAstronaut();
    moveSpaceship(); // Перемещаем корабль при загрузке

    setInterval(moveAstronaut, 10000); // Перемещение астронавта каждые 10 секунд
    setInterval(moveSpaceship, 10000); // Перемещение корабля каждые 10 секунд
});

document.getElementById('spaceship').addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие событий, чтобы предотвратить перехват клика другими обработчиками
    window.open('https://t.me/alim_live', '_blank'); // Открываем ссылку в новой вкладке
});
document.getElementById('spaceship').style.pointerEvents = 'auto'; // Гарантируем, что иконка реагирует на клики
