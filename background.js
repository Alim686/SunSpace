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

