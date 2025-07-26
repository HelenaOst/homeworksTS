"use strict";
//#NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів
const users15 = [];
//цикл для наповнення масиву юзерів
for (let i = 0; i < 100; i++) {
    const user = {
        id: i,
        name: `User №${i + 1}`
    };
    users15.push(user);
}
//створюю дів для виводу юзерів
let divU = document.querySelector('#wrapper');
//задаю початкову "сторінку" для виводу 10 юзерів
let currentPage = 0;
//ф-я ріже масив і виводить 10 юзерів (пагінація)
let paginationUsers = function (array) {
    if (divU) {
        //обнуляю дів
        divU.innerHTML = '';
        //вираховую початковий індекс
        const start = currentPage * 10;
        //вираховую кінцевий індекс
        const end = start + 10;
        //відрізаю частину масиву
        const tenUsers = array.slice(start, end);
        //виводжу відрізану частину масиву
        for (let user of tenUsers) {
            const pElem = document.createElement('p');
            pElem.innerHTML = `ID: ${user.id}, Name: ${user.name}`;
            divU.appendChild(pElem);
        }
    }
};
//виводиться перша десятка юзерів
paginationUsers(users15);
//подія
const form6 = document.forms[0];
//додаю слухача
form6.addEventListener('submit', function (event) {
    //відміняю дефолтну відправку форми
    event.preventDefault();
    //кличу сабмітер, що вирахує натиснуту кнопку по велью
    const clickedButton = event.submitter;
    if (clickedButton && clickedButton instanceof HTMLButtonElement) {
        //якщо натиснута некст
        if (clickedButton.value === 'next') {
            //якщо довжина масиву не перевищена
            if ((currentPage + 1) * 10 <= users15.length) {
                //сторінка збільшена на 1
                currentPage++;
                //приміняється ф-я пагінації
                paginationUsers(users15);
            }
            // якщо натиснута превью
        }
        else if (clickedButton.value === 'prev') {
            //початкова сторінка не менше 0
            if (currentPage > 0) {
                //сторінка зменшена на 1
                currentPage--;
                //приміняється ф-я пагінації
                paginationUsers(users15);
            }
        }
    }
});
