document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer для анимаций
    const animateElements = (entries, observer) => {
        entries.forEach(entry => {
            if (window.innerWidth >= 768 && entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    };

    const observer = new IntersectionObserver(animateElements, {
        threshold: 0.1
    });

    // Наблюдение за формой регистрации
    const registrationForm = document.querySelector('.registration-section form');
    if (registrationForm) {
        observer.observe(registrationForm);
    }

    // Наблюдение за конкретными анимированными секциями только для экранов шириной >= 768px
    const animatedSections = document.querySelectorAll('.section1, .section2, .imtext1, .imtext2, header, .nk, .box1, .color, .guyn2');
    animatedSections.forEach(section => {
        if (window.innerWidth >= 768) {
            observer.observe(section);
        }
    });

    // Установка восстановления скролла
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Прокрутка к началу страницы при загрузке
    window.scrollTo(0, 0);

    // Обработка ввода имени пользователя и анимации подсказки
    const nameInput = document.getElementById('username');
    const hint = nameInput.nextElementSibling;

    nameInput.addEventListener('focus', function() {
        hint.style.opacity = '1';
        hint.style.transform = 'translateY(-5px)';
    });

    nameInput.addEventListener('blur', function() {
        if (nameInput.value === '') {
            hint.style.opacity = '0';
            hint.style.transform = 'translateY(0)';
        }
    });

    // Первоначальная проверка состояния видимости подсказки
    if (nameInput.value !== '') {
        hint.style.opacity = '1';
        hint.style.transform = 'translateY(-5px)';
    }

    // Функция переключения меню для навигации
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    const burgerMenu = document.querySelector('.burger');
    burgerMenu.addEventListener('click', toggleMenu);
});
