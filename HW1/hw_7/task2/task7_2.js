"use strict";
//#nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class Client11 {
    constructor(id, name, surname, email, phone, products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.products = products;
    }
}
let clients = [];
const client1 = new Client11(1, 'John', 'Johnson', 'john.johnson@example.com', '123456789', [new Product('bread', 10), new Product('milk', 15), new Product('eggs', 20)]);
const client2 = new Client11(2, 'Peter', 'Williams', 'peter.williams@example.com', '987654321', [new Product('apples', 10)]);
const client3 = new Client11(3, 'Mary', 'Brown', 'mary.brown@example.com', '456123789', [new Product('chicken', 50), new Product('rice', 8), new Product('vegetables', 12),
    new Product('pasta', 7), new Product('sauce', 5)]);
const client4 = new Client11(4, 'Jane', 'Davis', 'jane.davis@example.com', '789456123', [new Product('coffee', 12), new Product('sugar', 3)]);
const client5 = new Client11(5, 'Anna', 'Miller', 'anna.miller@example.com', '321654987', [new Product('beef', 40), new Product('potatoes', 4), new Product('carrots', 3),
    new Product('fish', 30), new Product('lemon', 2), new Product('cereal', 6)]);
const client6 = new Client11(6, 'Michael', 'Wilson', 'michael.wilson@example.com', '654987321', [new Product('pizza', 15), new Product('soda', 3)]);
const client7 = new Client11(7, 'Sarah', 'Taylor', 'sarah.taylor@example.com', '987321654', [new Product('tea', 4), new Product('honey', 7), new Product('berries', 9)]);
const client8 = new Client11(8, 'David', 'Anderson', 'david.anderson@example.com', '159357486', [new Product('bread', 10), new Product('milk', 15), new Product('eggs', 20),
    new Product('apples', 10), new Product('bananas', 15)]);
const client9 = new Client11(9, 'Emily', 'Thomas', 'emily.thomas@example.com', '753159486', [new Product('chicken', 50), new Product('rice', 8)]);
const client10 = new Client11(10, 'Robert', 'Jackson', 'robert.jackson@example.com', '357951486', [new Product('coffee', 12), new Product('sugar', 3), new Product('cookies', 8),
    new Product('beef', 40), new Product('potatoes', 4), new Product('carrots', 3)]);
console.log(clients);
//#8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a, b) => a.products.length - b.products.length);
console.log(sortClients);
