//#AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


function CreateDeepCopy<T extends object>(originalObj: T):T{if(originalObj){
    let functions = [];
    for(let key in originalObj){
        if(typeof originalObj[key] === 'function'){
            const copyFunc = originalObj[key].bind({});
            functions.push({copyFunc, key});
            originalObj[key] = copyFunc;
        }
    }
    const stringToObj: T = JSON.parse(JSON.stringify(originalObj));
    //let objToString = JSON.stringify(object);
    //     let stringToObj = JSON.parse(objToString);

    for(let func of functions){
        stringToObj[func.key] = func.copyFunc;
    }
    return stringToObj
}
    throw new Error('Щось не те!');
}

let myObj = {
    name: 'Olena',
    lastName: 'Smith',
    greeting: function () {
        document.write('Hello')}
};
console.log(CreateDeepCopy(myObj));

myObj.greeting();
