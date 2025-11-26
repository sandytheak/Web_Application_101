const labContent = {
    'app_introduction': `
        <h2>1. Тема, мета та місце розташування сайту</h2>
        <p>Тут буде розширений опис теми, цілей лабораторної роботи та інформація про репозиторій.</p>
        <p><strong>Мета:</strong> Створити сучасний, адаптивний веб-застосунок.</p>
    `,
    'business_description': `
        <h2>2. Опис предметного середовища та бізнес-логіки</h2>
        <p>ДОДАТИ ОПИС</p>
    `,
    'HTML_table_code' : `
        <h2>3.1 HTML код таблиці<h2>
        <p>ДОДАТИ ОПИС</p>
    `,
    'HTML_image_code' : `
        <h2>3.2 HTML код зображення<h2>
        <p>ДОДАТИ ОПИС</p>
    `,
    'HTML_form_code' : `
        <h2>3.3 HTML код форми<h2>
        <p>ДОДАТИ ОПИС</p>
    `,
    'HTML_code' : `
        <h2>3.4 HTML код<h2>
        <p>ДОДАТИ ОПИС</p>
    `,
    'main_page' : `
        <h2>4. Головна сторінка WEB-застосунку<h2>
        <p>ДОДАТИ ОПИС</p>
    `,
    'main_page_code' : `
        <h2>5. Код головної сотінки застосунку<h2>
        <p>ДОДАТИ ОПИС</p>
    `,
}

function changeContent(event) {
    const contentId = event.currentTarget.dataset.contentId;
    const contentContainer = document.getElementById('lab-content');
    
    if (contentId && labContent[contentId]) {
        contentContainer.innerHTML = labContent[contentId];
        updateActiveClass(event.currentTarget);
    }
}

function updateActiveClass(clickedElement) {
    
    const allMenuItems = document.querySelectorAll('.left-sidebar li[data-content-id]');
    allMenuItems.forEach(item => {
        item.classList.remove('active');
    });

    clickedElement.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.left-sidebar li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', changeContent);
    });

    const initialContentId = menuItems[0].dataset.contentId;
    document.getElementById('lab-content').innerHTML = labContent[initialContentId];
});