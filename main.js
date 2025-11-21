// Массив с данными о городах
const cities = [
    {
        city: 'Чебоксары',
        mobileCity: 'Чебоксары',
        date: '29.11',
        ticketsLink: 'https://spb.showgogo.ru/buy/concerts/saluki-cheboksary-29-11-2025/29.11.25-20.00/'
    },
    {
        city: 'Казань',
        mobileCity: 'Казань',
        date: '30.11',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-kazan-30-11-2025/'
    },
    {
        city: 'Новосибирск',
        mobileCity: 'Новосибирск',
        date: '05.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-novosibirsk-05-12-2025/'
    },
    {
        city: 'Кемерово',
        mobileCity: 'Кемерово',
        date: '06.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-kemerovo-06-12-2025/'
    },
    {
        city: 'Томск',
        mobileCity: 'Томск',
        date: '07.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-tomsk-07-12-202/'
    },
    {
        city: 'Нижний Новгород',
        mobileCity: 'Н.Новгород',
        date: '09.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-nizhniy-novgorod-09-12-2025/'
    },
    {
        city: 'Краснодар',
        mobileCity: 'Краснодар',
        date: '11.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-krasnodar-11-12-2025/'
    },
    {
        city: 'Воронеж',
        mobileCity: 'Воронеж',
        date: '13.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-voronezh-13-12-2025/'
    },
    {
        city: 'Ростов-На-Дону',
        mobileCity: 'Ростов',
        date: '14.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-rostov-na-donu-14-12-2025/'
    },
    {
        city: 'Екатеринбург',
        mobileCity: 'Екатеринбург',
        date: '16.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-ekaterinburg-16-12-2025/'
    },
    {
        city: 'Челябинск',
        mobileCity: 'Челябинск',
        date: '17.12',
        ticketsLink: 'https://spb.showgogo.ru/events/concerts/saluki-chelyabinsk-17-12-2025/'
    }
];

// Функция для определения мобильного устройства
function isMobile() {
    return window.innerWidth <= 768;
}

// Функция для создания элемента города
function createCityItem(cityData) {
    const displayCity = isMobile() ? cityData.mobileCity : cityData.city;

    return `
        <div class="cities__item">
            <div class="cities__item__container">
                <div class="cities__item__city">
                    <h2>${displayCity}</h2>
                    <h3>${cityData.date}</h3>
                </div>
                <div class="cities__item__line">
                    <hr>
                </div>
                <div class="cities__item__btns">
                    <a target="_blank" href="https://t.me/saluki_tour" class="cities__item__btn cities__item__btn--1">
                        <img src="./public/images/Users_Group.svg" alt="сообщество">
                    </a>
                    <a target="_blank" href="${cityData.ticketsLink}" class="cities__item__btn cities__item__btn--2">
                        БИЛЕТЫ
                    </a>
                </div>
            </div>
            <div class="cities__item__line">
                <hr>
            </div>
        </div>
    `;
}

// Заполнение контейнера
function renderCities() {
    const container = document.getElementById('citiesContainer');

    // Очищаем контейнер (опционально)
    container.innerHTML = '';

    // Добавляем элементы
    const citiesHTML = cities.map(city => createCityItem(city)).join('');
    container.innerHTML = citiesHTML;
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', renderCities);

// Перерисовка при изменении размера окна
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderCities();
    }, 250);
});


window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        const site = document.querySelector(".wrapper");

        site.style.display = "block";

        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = 0;

        setTimeout(() => {
            if(preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 500);

    }, 3000);
});


// Попап
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");

function openPopup() {
    popup.classList.add("popup--active");
}

function closePopup() {
    popup.classList.remove("popup--active");
}

popupClose.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
});

// Открытие попапа
openPopup();
