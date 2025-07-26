"use strict";
//#ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати
// дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під
// формою з’явився блок з вашим об’єктом
let button3 = document.querySelector('#button');
if (button3 !== null) {
    button3.addEventListener('click', function (event) {
        event.preventDefault();
        const wrapper = document.createElement('div');
        const nameInput = document.querySelector('#userName');
        const surnameInput = document.querySelector('#userSurname');
        const ageInput = document.querySelector('#userAge');
        if (!nameInput || !surnameInput || !ageInput) {
            console.log('Одне з полів не знайдено');
            return;
        }
        const userName = nameInput.value;
        const userSurname = surnameInput.value;
        const userAge = Number(ageInput.value);
        let user = { Name: userName, Surname: userSurname, Age: userAge };
        wrapper.innerText = `${user.Name} ${user.Surname}, ${user.Age} років`;
        document.body.appendChild(wrapper);
    });
}
