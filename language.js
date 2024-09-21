// Объект с переводами для трёх языков
const translations = {
    en: {
        "description": {
            title: "SunSpace",
            text: "SunSpace isn’t just a token; it’s your ticket to the future! We’re combining the power of the sun and our love for space to create something truly exciting. With SunSpace, you’re joining a movement that’s taking green energy and space exploration to the next level. \n\nWe believe saving the planet can be fun and profitable, all while paving the way to the stars. Join us, and let’s light up the future together!"
        },
        "how-to-buy": {
            title: "How to Buy",
            list: [
                "Download TronLink Wallet (Android, iOS, Chrome)",
                "Deposit Tron ($TRX) to the wallet from any exchanges",
                "Go to Sunpump.meme or Sun.io, set the Slippage tolerance 1% and buy token"
            ],
            importantInfo: "IMPORTANT: You must leave a minimum 80 TRX in your wallet balance to pay commissions on the network."
        },
        "tokenomics": {
            title: "Tokenomics",
            list: [
                "Token name: SunSpace ($SPACE)",
                "Total supply: 1b",
                "Market Cap: ~1m$",
                "Holders: ~1k"
            ],
            address: "CA: TEHwcoftEokQ2sT8eYi76pamHioRbgaNhs"
        },
        "roadmap": {
            title: "Roadmap",
            steps: [
                "Creation and launch of the SunSpace token",
                "Creation of the official website",
                "Development and implementation of the bot",
                "Formation of an active community",
                "Achievement of $1 million market capitalization",
                "Introduction of gaming processes and achievement of $10 million market capitalization",
                "Listing on the first centralized exchange (CEX) and achievement of $1 billion market capitalization",
                "Partnership with SpaceX and Elon Musk",
                "Achievement of $1 trillion market capitalization",
                "Launch of a physical coin into space and protection of the planet"
            ]
        }
    },
    ru: {
        "description": {
            title: "SunSpace",
            text: "SunSpace — это не просто токен; это ваш билет в будущее! Мы объединяем силу солнца и нашу любовь к космосу, чтобы создать нечто по-настоящему захватывающее. С SunSpace вы присоединяетесь к движению, которое поднимает зеленую энергию и освоение космоса на новый уровень. \n\nМы верим, что спасать планету может быть весело и прибыльно, одновременно прокладывая путь к звездам. Присоединяйтесь к нам, и давайте осветим будущее вместе!"
        },
        "how-to-buy": {
            title: "Как купить",
            list: [
                "Скачайте TronLink Wallet (Android, iOS, Chrome)",
                "Пополните кошелек Tron ($TRX) с любого обменника",
                "Перейдите на Sunpump.meme или Sun.io, установите допустимый слиппедж 1% и купите токен"
            ],
            importantInfo: "ВАЖНО: Вы должны оставить минимум 80 TRX на балансе вашего кошелька для оплаты комиссий в сети."
        },
        "tokenomics": {
            title: "Токеномика",
            list: [
                "Название токена: SunSpace ($SPACE)",
                "Общий выпуск: 1b",
                "Рыночная капитализация: ~1m$",
                "Держатели: ~1k"
            ],
            address: "CA: TEHwcoftEokQ2sT8eYi76pamHioRbgaNhs"
        },
        "roadmap": {
            title: "Дорожная карта",
            steps: [
                "Создание и запуск токена SunSpace",
                "Создание официального веб-сайта",
                "Разработка и внедрение бота",
                "Формирование активного сообщества",
                "Достижение рыночной капитализации в $1 миллион",
                "Введение игровых процессов и достижение рыночной капитализации в $10 миллионов",
                "Листинг на первой централизованной бирже (CEX) и достижение рыночной капитализации в $1 миллиард",
                "Партнерство с SpaceX и Илоном Маском",
                "Достижение рыночной капитализации в $1 триллион",
                "Запуск физической монеты в космос и защита планеты"
            ]
        }
    },
    中文: {
        "description": {
            title: "SunSpace",
            text: "SunSpace 不仅仅是一个代币；它是您通向未来的门票！我们结合太阳的力量和对太空的热爱，创造了一些真正令人兴奋的东西。通过 SunSpace，您将加入一个将绿色能源和太空探索提升到新水平的运动。\n\n我们相信拯救地球既有趣又有利可图，同时为通向星星的道路铺平了道路。加入我们，让我们一起点亮未来！"
        },
        "how-to-buy": {
            title: "如何购买",
            list: [
                "下载 TronLink Wallet（安卓、iOS、Chrome）",
                "从任何交易所将 Tron ($TRX) 存入钱包",
                "访问 Sunpump.meme 或 Sun.io，设置 1% 的滑点容忍度并购买代币"
            ],
            importantInfo: "重要提示：您必须在钱包余额中保留至少 80 TRX 以支付网络佣金。"
        },
        "tokenomics": {
            title: "代币经济学",
            list: [
                "代币名称：SunSpace ($SPACE)",
                "总供应量：1b",
                "市值：~1m$",
                "持有者：~1k"
            ],
            address: "CA: TEHwcoftEokQ2sT8eYi76pamHioRbgaNhs"
        },
        "roadmap": {
            title: "路线图",
            steps: [
                "SunSpace 代币的创建和发布",
                "官方网页的创建",
                "机器人的开发和实施",
                "活跃社区的形成",
                "$100 万市值的达成",
                "游戏流程的引入和 $1000 万市值的达成",
                "在第一个中心化交易所（CEX）上市并达成 $10 亿市值",
                "与 SpaceX 和 Elon Musk 建立合作伙伴关系",
                "达成 $1 万亿市值",
                "将实物硬币发射到太空并保护地球"
            ]
        }
    }
};

// Функция для обновления контента на выбранном языке
function updateContent(language) {
    const contentSections = document.querySelectorAll('.section');
    contentSections.forEach(section => {
        const id = section.id;
        const sectionData = translations[language][id];
        section.querySelector('h1, h2').textContent = sectionData.title;
        const pElement = section.querySelector('p:not(.important-info)');
        if (pElement) {
            pElement.textContent = sectionData.text || '';
        }
        const list = section.querySelector('ul, ol');
        if (list) {
            list.innerHTML = '';
            sectionData.list.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                list.appendChild(li);
            });
        }
        const importantInfo = section.querySelector('.important-info p');
        if (importantInfo) {
            importantInfo.innerHTML = '<i class="icon-info">!</i> ' + sectionData.importantInfo;
        }
        const address = section.querySelector('.token-address-btn');
        if (address) {
            address.textContent = sectionData.address;
        }
        const roadmapItems = section.querySelectorAll('.roadmap-item p');
        if (roadmapItems.length > 0) {
            roadmapItems.forEach((item, index) => {
                item.textContent = sectionData.steps[index];
            });
        }
    });
}

// Обработчик клика по основной кнопке
document.getElementById('language-btn').addEventListener('click', function() {
    const languageOptions = document.getElementById('language-options');
    const languageSelector = document.querySelector('.language-selector');

    // Переключение классов для анимации расширения
    languageSelector.classList.toggle('expanded');
    
    if (languageSelector.classList.contains('expanded')) {
        languageOptions.classList.add('expanded');
    } else {
        languageOptions.classList.remove('expanded');
    }
});

// Обработчик выбора языка
document.querySelectorAll('.lang-option').forEach(function(langItem) {
    langItem.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        document.querySelector('.btn-text').textContent = selectedLang.toUpperCase();
        const languageOptions = document.getElementById('language-options');
        const languageSelector = document.querySelector('.language-selector');
        languageOptions.classList.remove('expanded');
        languageSelector.classList.remove('expanded');
        updateContent(selectedLang);
    });
});

// Начальная настройка контента при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateContent('en');
});


document.querySelectorAll('.lang-option').forEach(function(langItem) {
    langItem.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        const selectedFlag = this.querySelector('.flag-icon').src;  // Получаем ссылку на флаг

        // Обновляем основной текст и иконку на кнопке
        const languageBtn = document.getElementById('language-btn');
        languageBtn.innerHTML = `<img src="${selectedFlag}" alt="Flag" class="flag-icon"> ${selectedLang.toUpperCase()}`;

        // Закрываем список языков
        const languageOptions = document.getElementById('language-options');
        const languageSelector = document.querySelector('.language-selector');
        languageOptions.classList.remove('expanded');
        languageSelector.classList.remove('expanded');

        // Обновляем контент на выбранном языке
        updateContent(selectedLang);
    });
});

// Начальная настройка языка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const defaultFlag = document.querySelector('.lang-option[data-lang="en"] .flag-icon').src;  // Флаг по умолчанию
    document.getElementById('language-btn').innerHTML = `<img src="${defaultFlag}" alt="Flag" class="flag-icon"> EN`;
    updateContent('en');  // Устанавливаем язык по умолчанию
});
function updateContent(language) {
    const contentSections = document.querySelectorAll('.section');
    contentSections.forEach(section => {
        const id = section.id;
        const sectionData = translations[language][id];
        
        if (sectionData) {
            // Обновляем заголовки
            section.querySelector('h1, h2').textContent = sectionData.title;

            // Обновляем параграфы
            const pElement = section.querySelector('p:not(.important-info)');
            if (pElement) {
                pElement.innerHTML = sectionData.text ? sectionData.text.replace(/\n/g, '<br>') : '';
            }

            // Обновляем списки (ul или ol)
            const list = section.querySelector('ul, ol');
            if (list && sectionData.list) {
                list.innerHTML = ''; // Очищаем текущий список
                sectionData.list.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = item;
                    list.appendChild(li);
                });
            }

            // Обновляем важную информацию
            const importantInfo = section.querySelector('.important-info p');
            if (importantInfo && sectionData.importantInfo) {
                importantInfo.innerHTML = '<i class="icon-info">!</i> ' + sectionData.importantInfo;
            }

            // Обновляем токен адрес
            const address = section.querySelector('.token-address-btn');
            if (address && sectionData.address) {
                address.textContent = sectionData.address;
            }

            // Обновляем шаги в дорожной карте
            const roadmapItems = section.querySelectorAll('.roadmap-item p');
            if (roadmapItems.length > 0 && sectionData.steps) {
                roadmapItems.forEach((item, index) => {
                    item.textContent = sectionData.steps[index];
                });
            }
        }
    });
}
