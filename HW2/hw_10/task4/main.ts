//#2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1

//дістає значення з локального сховища браузера за ключем 'number' у вигляді рядка
//Знак + перед localStorage.getItem(...) — це унарний плюс, який перетворює рядок на число.

const savedValue: string | null = localStorage.getItem('number');
let num: number = savedValue !== null ? Number(savedValue) : 0;


//Збільшує змінну num на 1.
num += 1;

//Зберігає оновлене число назад у localStorage під тим самим ключем 'number'.
localStorage.setItem('number', num.toString());

// Знаходить елемент з id="number" в HTML та вставляє туди нове значення num.
const numberElement: HTMLElement | null = document.getElementById('number');
if (numberElement){
    numberElement.innerText = num.toString();
}