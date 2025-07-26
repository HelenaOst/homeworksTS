"use strict";
// #OPLI89c9G
//
// – Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const array111 = ['Main', 'Products', 'About us', 'Contacts'];
let myUlElement = document.querySelector('ul.mainList');
if (myUlElement) {
    for (const element of array111) {
        let li = document.createElement('li');
        li.innerText = element;
        myUlElement.appendChild(li);
    }
}
