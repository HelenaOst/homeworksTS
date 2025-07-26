//#zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class CreateCinderella{
    name:string;
    age:number;
    footSize:number;
    constructor(name:string, age:number, footSize:number){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new CreateCinderella('Cinderella1', 18, 35),
    new CreateCinderella('Cinderella2', 19, 35.5),
    new CreateCinderella('Cinderella3', 20, 36),
    new CreateCinderella('Cinderella4', 21, 36.5),
    new CreateCinderella('Cinderella5', 22, 37),
    new CreateCinderella('Cinderella6', 17, 37.5),
    new CreateCinderella('Cinderella7', 20, 38),
    new CreateCinderella('Cinderella8', 19, 38.5),
    new CreateCinderella('Cinderella9', 21, 39),
    new CreateCinderella('Cinderella10', 18, 39.5)
];


class CreatePrince{
    name: string;
    age: number;
    shoeSize: number;
    wife?: CreateCinderella;
    constructor(name: string, age: number, shoeSize: number){
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new CreatePrince('Prince', 18, 37);

for(let cinderella of cinderellas){
    if(cinderella.footSize === prince.shoeSize) {
        console.log(`${cinderella.name} and ${prince.name} are IN LOVE`);
        prince.wife = cinderella;
    }
}
console.log(prince);

let findCinderella = cinderellas.find(function (cinderella){
    return cinderella.footSize === prince.shoeSize;
})
console.log(findCinderella);
