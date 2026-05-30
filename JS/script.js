// Ждём полной загрузки страницы (все изображения, стили)
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    
}
console.log('JS-файл подключен успешно!');


// Получаем элементы
const modal = document.getElementById('modalForm');
const openBtn = document.getElementById('openFormBtn');
const closeBtn = document.querySelector('.close-btn');

// Открыть модальное окно
openBtn.onclick = function() {
    modal.style.display = 'flex';   // показываем как flex-контейнер (центрирование)
}

// Закрыть по крестику
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Закрыть при клике на фон (вне формы)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}