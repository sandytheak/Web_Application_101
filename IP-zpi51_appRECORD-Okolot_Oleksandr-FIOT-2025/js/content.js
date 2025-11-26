const labContent = {
    'app_introduction': `
        <article>
            <h2>1. Тема, мета та місце розташування сайту</h2>
            <h3>Тема WEB-застосунку</h3>
            <p>SimAccu: Інтегрована WEB-платформа для Спрощеного Фінансового Обліку та 
            Управління Клієнтами (CRM) для Індивідуальних Підприємців та Малого Бізнесу.</p>
            <h3> Мета створення власного WEB-застосунку</h3>
            <p><strong>Мета:</strong> надати індивідуальним підприємцям та представникам 
            малого бізнесу інтуїтивно зрозумілий, доступний та безпечний інструмент, що 
            об'єднує ключові функції фінансового обліку та управління взаємовідносинами 
            з клієнтами.</p>
            <ol><strong>Ключові цілі:</strong>
                <li><strong>Спрощення обліку:</strong> Максимально автоматизувати та спростити процес 
                ведення фінансових записів, дозволяючи користувачам без спеціалізованих 
                знань швидко реєструвати доходи та витрати.</li>
                <li><strong>Поліпшення CRM:</strong> Централізувати інформацію про клієнтів, історію взаємодій та статус 
                угод для ефективного управління продажами та підвищення лояльності.</li>
                <li><strong>Прийняття рішень:</strong> Надавати зрозумілу аналітику та звіти, що дозволяють власнику бізнесу швидко оцінювати 
                фінансовий стан та приймати обґрунтовані стратегічні рішення.</li>
            </ol>
        </article>
    `,
    'business_description': `
        <article>
            <h2>2. Опис предметного середовища та бізнес-логіки</h2>
            <p>Предметне середовище застосунку SimAccu охоплює два ключові напрямки малого бізнесу: Фінансовий Облік та Управління Клієнтами (CRM), 
            інтегровані в єдину систему.</p>
            <ul>Напрям системи "Фінансовий Облік" відповідає за: 
                <li>Облік доходів: Реєстрація всіх надходжень (оплат від клієнтів). Доходи класифікуються за категоріями (наприклад, продаж товарів, 
                надання послуг). Система генерує та зберігає Рахунки-Фактури (Інвойси).</li>
                <li>Облік витрат: Реєстрація всіх платежів та операційних витрат. Витрати також класифікуються за категоріями (наприклад, оренда, 
                зарплата, маркетинг).</li>
                <li>Категоризація: Кожен дохід і витрата має бути прив'язаний до визначеної користувачем або стандартної категорії для подальшого аналізу.</li>
                <li>Баланс: Система автоматично розраховує поточний фінансовий результат (доходи мінус витрати) за вибраний період.</li>
            </ul>
            <ul>Напрям системи "Управління клієнтами" відповідає за:
                <li>Картка клієнта: Зберігання повної інформації про фізичних чи юридичних осіб (контакти, адреси, податкові дані).</li>
                <li>КВоронка продажів: Відстеження статусів угод ("Пропозиція відправлена", "Очікує оплати", "Успішно завершено").</li>
                <li>Інтеграція: Успішно завершена угода в CRM автоматично створює чернетку рахунку-Фактури у блоці Обліку.</li>
            </ul>
            <ul>Напрям системи "Аналітика та звітність" агрегує дані з обох модулів для створення:
                <li>Звітів про прибутки та збитки.</li>
                <li>Звітів про ефективність продажів (конверсія воронки).</li>
                <li>Аналізу доходів/витрат за категоріями та клієнтами.</li>
            </ul>
            <h3>Функціональні вимоги</h3>
            <table border=1>
                <tr>
                    <th>Функціональна вимога</th>
                    <th>Опис</th>
                </tr>
                <tr>
                    <td>Автентифікація</td>
                    <td>Користувач повинен мати можливість зареєструватися, увійти/вийти з системи.</td>
                </tr>
                <tr>
                    <td>Керування клієнтами</td>
                    <td>Користувач повинен мати можливість створювати, переглядати, редагувати та видаляти картки клієнтів.</td>
                </tr>
                <tr>
                    <td>Облік транзакцій</td>
                    <td>Користувач повинен мати можливість реєструвати нові транзакції та призначати їм категорію.</td>
                </tr>
                <tr>
                    <td>Керування категоріями</td>
                    <td>Користувач повинен мати можливість створювати та редагувати власні категорії транзакцій.</td>
                </tr>
                <tr>
                    <td>Формування звітів</td>
                    <td>Система повинна генерувати базові фінансові звіти за вибраний період.</td>
                </tr>
                <tr>
                    <td>Дашборд</td>
                    <td>Система повинна відображати огляд ключових фінансових показників на головній сторінці.</td>
                </tr>
            </table>
            <h3>Нефункціональні вимоги</h3>
            <table border=1>
                <tr>
                    <th>Вимога</th>
                    <th>Опис</th>
                </tr>
                <tr>
                    <td>Безпека даних</td>
                    <td>Усі персональні та фінансові дані повинні передаватися лише через захищений протокол та зберігатися у зашифрованому вигляді.</td>
                </tr>
                <tr>
                    <td>Надійність</td>
                    <td>Система повинна забезпечувати цілодобову доступність.</td>
                </tr>
                <tr>
                    <td>Мобільна адаптація</td>
                    <td>Інтерфейс застосунку має бути повністю адаптивним для коректного відображення та використання на мобільних пристроях.</td>
                </tr>
                <tr>
                    <td>Масштабованість</td>
                    <td>Архітектура системи повинна дозволяти швидке додавання нових функцій.</td>
                </tr>
            </table>
        </article>
    `,
    'HTML_table_code' : `
        <article>
            <h2>4. HTML код зображення</h2>
            <p>
                <code>
                    &nbsp;&lt;table border=&quot;1&quot;&gt;<br>
                        &nbsp;&nbsp;&lt;tr&gt;<br>
                            &nbsp;&nbsp;&nbsp;&lt;th&gt;Accurate Accounting&lt;/th&gt;<br>
                            &nbsp;&nbsp;&nbsp;&lt;th&gt;Comprehensive Reporting&lt;/th&gt;<br>
                            &nbsp;&nbsp;&nbsp;&lt;th&gt;Actionable Analytics&lt;/th&gt;<br>
                        &nbsp;&nbsp;&lt;/tr&gt;<br>
                        &nbsp;&nbsp;&lt;tr&gt;<br>
                            &nbsp;&nbsp;&nbsp;&lt;td&gt;Easily track income and expenses, manage ledgers, and handle <br>
                                &nbsp;&nbsp;&nbsp;all your fundamental bookkeeping tasks. Our intuitive system <br>
                                &nbsp;&nbsp;&nbsp;ensures your records are always accurate and up-to-date.&lt;/td&gt;<br>
                            &nbsp;&nbsp;&nbsp;&lt;td&gt;Generate detailed financial reports for virtually any purpose, <br>
                                &nbsp;&nbsp;&nbsp;from tax filing to stakeholder review. Utilize our basic and <br>
                                &nbsp;&nbsp;&nbsp;customizable templates to get started quickly and ensure <br>
                                &nbsp;&nbsp;&nbsp;consistency.&lt;/td&gt;<br>
                            &nbsp;&nbsp;&lt;td&gt;Gain powerful insights from your business data. Our analytics <br>
                                &nbsp;&nbsp;&nbsp;tools transform your numbers into clear visualizations, helping <br>
                                &nbsp;&nbsp;&nbsp;you understand performance, spot trends, and make informed strategic <br>
                                &nbsp;&nbsp;&nbsp;decisions.&lt;/td&gt;<br>
                        &nbsp;&nbsp;&lt;/tr&gt;<br>
                    &nbsp;&lt;/table&gt;<br>
                </code>
            </p>
        </article>
    `,
    'HTML_image_code' : `
        <article>
            <h2>4. HTML код зображення</h2>
            <p>
                <code>
                    &lt;img src="images/logo.jpg" 
                        alt="Logo"
                        width=150px&gt;
                </code>
            </p>
        </article>
    `,
    'main_page' : `
        <h2>6. Головна сторінка WEB-застосунку</h2>
        <p>Для перегляду HTML-коду головної сторінки застосунку перейдіть за посиланням: </p>
        <a href="https://github.com/sandytheak/Web_Application_101/tree/main/IP-zpi51_appRECORD-Okolot_Oleksandr-FIOT-2025">Сторінка застосунку</a>
    `,
    'main_page_code' : `
        <h2>7. Код головної сотінки застосунку</h2>
        <p>Для перегляду HTML-коду головної сторінки застосунку перейдіть за посиланням: </p>
        <a href="https://github.com/sandytheak/Web_Application_101/tree/main/IP-zpi51_appRECORD-Okolot_Oleksandr-FIOT-2025">Сторінка застосунку</a>
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

/*function updateActiveClass(clickedElement) {
    
    const allMenuItems = document.querySelectorAll('.left-sidebar li[data-content-id]');
    allMenuItems.forEach(item => {
        item.classList.remove('active');
    });

    clickedElement.classList.add('active');
}*/

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.left-sidebar li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', changeContent);
    });

    const initialContentId = menuItems[0].dataset.contentId;
    document.getElementById('lab-content').innerHTML = labContent[initialContentId];
});