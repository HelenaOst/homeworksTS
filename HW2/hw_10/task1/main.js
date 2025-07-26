"use strict";
//#sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let mainDiv = document.createElement('div');
mainDiv.id = 'text';
let button1 = document.createElement('button');
button1.innerText = 'Жми, щоб зник id';
document.body.append(mainDiv, button1);
button1.onclick = function () {
    mainDiv.removeAttribute('id');
};
