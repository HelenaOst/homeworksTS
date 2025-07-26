//#8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

let divV: HTMLDivElement = document.createElement('div');
divV.classList.add('wrap', 'collapse', 'alpha', 'beta');
divV.innerText = 'Hello Okten';

divV.style.background = 'violet';
divV.style.background = 'red';
divV.style.fontSize = '20px';

//клонування

const clone = divV.cloneNode(true);

document.body.append(divV, clone);

