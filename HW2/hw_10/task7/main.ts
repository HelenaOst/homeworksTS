//#RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


//ф-я приймає ключ масиву і об'єкт
function addToLocalStorage(arrayName: string,objToAdd: object): void {
    //витягую масив з лс, обертаю в змінну
    const lsElement: string | null = localStorage.getItem(arrayName);
    //перевірка, чи існує масив з таким ключем
    if(!lsElement){
        // створ. помилку на випадок відсутності масиву
        throw  new Error("Invalid array");
    }
    //парсю масив, яки   витягла
    const array: any[] = JSON.parse(lsElement);
    //перевірка, чи доданий об'єкт є об'єктом
    if(typeof objToAdd === "object"){
        //якщо так, додаю об'єкт в масив
        array.push(objToAdd);
    }
    //додаю в лс стрінгований масив
    localStorage.setItem(arrayName, JSON.stringify(array));
}

//перевіряю функцію
addToLocalStorage('sessionsList', {});