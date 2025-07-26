"use strict";
//#kUSgFqWY
//
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
//витягую кнопку
const form = document.forms[0];
//вішаю на кнопку слухача
form.addEventListener('click', function (event) {
    //відмикаю відправку форми
    event.preventDefault();
    //дістаю таблицю
    const table = document.getElementsByTagName('table')[0];
    //дістаю значення к-ті рядків
    let numRows = +(document.querySelector('#rows')?.value ?? '') || 0;
    //дістаю значення к-ті ячейок
    let numCells = +(document.querySelector('#cells')?.value ?? '') || 0;
    //дістаю контент
    let text = document.querySelector('#contents')?.value ?? '';
    //зовнішній цикл на к-ті рядків
    for (let i = 0; i < numRows; i++) {
        //створюю рядок
        let row = document.createElement('tr');
        //внутрішній цикл на к-ть ячейок
        for (let j = 0; j < numCells; j++) {
            //створюю ячейку
            let cell = document.createElement('td');
            //наповнюю ячейку контентом
            cell.innerHTML = text;
            //додаю ячейку в таблицю
            row.appendChild(cell);
        }
        //додаю рядок в таблицю
        table.appendChild(row);
    }
});
