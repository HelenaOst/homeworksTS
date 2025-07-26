//– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом



type Course22 = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}


console.log("=== ПОКРАЩЕНИЙ ВАРІАНТ 2: З перевірками ===");

function renderCoursesWithValidation(coursesArray: Course22[], container: HTMLElement = document.body): void {
    // Перевірка на існування масиву
    if (!Array.isArray(coursesArray) || coursesArray.length === 0) {
        console.warn('Масив курсів порожній або не є масивом');
        return;
    }

    coursesArray.forEach((course: Course22, index: number): void => {
        // Перевірка на обов'язкові поля
        if (!course.title) {
            console.warn(`Курс ${index} не має заголовка`);
            return;
        }

        // Створюємо обгортку
        const wrapper: HTMLDivElement = document.createElement('div');
        wrapper.classList.add('course-wrapper');
        wrapper.setAttribute('data-course-id', String(index));

        // Заголовок
        const title: HTMLHeadingElement = document.createElement('h2');
        title.className = 'course-title';
        title.textContent = course.title;
        wrapper.appendChild(title);

        // Тривалість (з перевіркою)
        if (course.monthDuration || course.hourDuration) {
            const duration:HTMLParagraphElement = document.createElement('p');
            duration.className = 'course-duration';
            duration.textContent = `Тривалість: ${course.monthDuration || 0} міс., ${course.hourDuration || 0} год.`;
            wrapper.appendChild(duration);
        }

        // Модулі (з перевіркою)
        if (Array.isArray(course.modules) && course.modules.length > 0) {
            const modulesList:HTMLUListElement = document.createElement('ul');
            modulesList.className = 'modules-list';

            course.modules.forEach(module => {
                if (module) { // перевірка на порожні модулі
                    const listItem:HTMLLIElement = document.createElement('li');
                    listItem.className = 'module-item';
                    listItem.textContent = module;
                    modulesList.appendChild(listItem);
                }
            });

            wrapper.appendChild(modulesList);
        }

        container.appendChild(wrapper);
    });
}
