//#ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати
// дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під
// формою з’явився блок з вашим об’єктом

type User15 = {
    Name: string,
    Surname: string,
    Age: number,
}

let button3: HTMLButtonElement | null = document.querySelector('#button');
if (button3 !== null) {
button3.addEventListener('click', function (event: MouseEvent):void {
    event.preventDefault();
    const wrapper: HTMLDivElement = document.createElement('div')

    const nameInput: HTMLInputElement | null = document.querySelector('#userName');
    const surnameInput: HTMLInputElement | null = document.querySelector('#userSurname');
    const ageInput: HTMLInputElement | null = document.querySelector('#userAge');


    if (!nameInput || !surnameInput || !ageInput) {
        console.log('Одне з полів не знайдено');
        return;
    }
    const userName: string  = nameInput.value;
    const userSurname: string = surnameInput.value;
    const userAge: number = Number(ageInput.value);

    let user: User15 = {Name: userName, Surname: userSurname, Age: userAge}

    wrapper.innerText = `${user.Name} ${user.Surname}, ${user.Age} років`;
    document.body.appendChild(wrapper);
})}