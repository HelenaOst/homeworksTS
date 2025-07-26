"use strict";
//#AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
function CreateDeepCopy(originalObj) {
    if (originalObj) {
        let functions = [];
        for (let key in originalObj) {
            if (typeof originalObj[key] === 'function') {
                const copyFunc = originalObj[key].bind({});
                functions.push({ copyFunc, key });
                originalObj[key] = copyFunc;
            }
        }
        const stringToObj = JSON.parse(JSON.stringify(originalObj));
        //let objToString = JSON.stringify(object);
        //     let stringToObj = JSON.parse(objToString);
        for (let func of functions) {
            stringToObj[func.key] = func.copyFunc;
        }
        return stringToObj;
    }
    throw new Error('Щось не те!');
}
let myObj = {
    name: 'Olena',
    lastName: 'Smith',
    greeting: function () {
        document.write('Hello');
    }
};
console.log(CreateDeepCopy(myObj));
myObj.greeting();
//
//function createDeepCopy<T extends object>(object: T): T {
//   if (object === null || object === undefined || typeof object !== 'object') {
//     throw new Error('Помилка: треба передати об’єкт, а не null, undefined чи щось інше');
//   }
//
//   // Зберігаємо функції тимчасово
//   const savedFunctions: { key: string; fn: Function }[] = [];
//
//   for (const key in object) {
//     if (typeof object[key] === 'function') {
//       savedFunctions.push({ key, fn: object[key] });
//     }
//   }
//
//   // Робимо копію об'єкта без функцій
//   const jsonString = JSON.stringify(object);
//   const copiedObject = JSON.parse(jsonString);
//
//   // Повертаємо функції назад
//   for (const { key, fn } of savedFunctions) {
//     copiedObject[key] = fn;
//   }
//
//   return copiedObject;
// }
