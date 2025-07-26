"use strict";
//#vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
// додані перевірки іф
class Driver {
    constructor(id, name, surname, email, phone) {
        this.name = name;
    }
}
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume, driver) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = driver;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} метрів на годину`);
    }
    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed(SpeedToAdd) {
        if (SpeedToAdd > 0) {
            this.maxSpeed = SpeedToAdd + this.maxSpeed;
        }
    }
    changeYear(newValue) {
        if (newValue > 1815) {
            this.year = newValue;
        }
    }
    addDriver(driver) {
        if (driver) {
            this.driver = driver;
        }
    }
}
let cars = [];
let car1 = new Car('Q7', 'BMW', 2018, 200, 1.6);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
console.log(car1);
car1.changeYear(2019);
console.log(car1);
car1.addDriver({ name: 'Peter' });
console.log(car1.driver);
