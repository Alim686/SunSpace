// Переключение языка
const languageBtn = document.getElementById('language-btn');
const languageOptions = document.getElementById('language-options');
const sections = {
    en: document.getElementById('en-section'),
    ru: document.getElementById('ru-section'),
    cn: document.getElementById('cn-section'),
};

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedLang = e.currentTarget.getAttribute('data-lang');
        
        // Скрываем все секции
        Object.values(sections).forEach(section => section.style.display = 'none');
        
        // Показываем выбранную секцию
        sections[selectedLang].style.display = 'block';
        
        // Обновляем текст и флаг на кнопке
        const selectedFlag = e.currentTarget.querySelector('img').getAttribute('src');
        const selectedText = e.currentTarget.innerText;
        languageBtn.querySelector('img').setAttribute('src', selectedFlag);
        languageBtn.querySelector('.btn-text').innerText = selectedText;

        // Закрываем опции после выбора
        languageOptions.classList.remove('expanded');
    });
});

// Открытие/закрытие меню выбора языка
languageBtn.addEventListener('click', () => {
    languageOptions.classList.toggle('expanded');
});
