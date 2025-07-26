"use strict";
//Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
async function fetchData(url) {
    if (!url) {
        throw new Error('url is required');
    }
    else {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
            return data;
        }
    }
    throw new Error(`data is not found`);
}
//
fetchData('https://jsonplaceholder.typicode.com/users/1');
