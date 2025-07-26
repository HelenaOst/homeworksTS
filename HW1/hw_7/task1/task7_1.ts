//#XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

class User11 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    constructor(id: number, name: string, surname: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let userss: User11[] = [];


userss.push(new User11(1, 'John', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(2, 'Peter', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(3, 'Mary', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(4, 'Jane', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(5, 'Anna', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(6, 'Peter', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(7, 'Mary', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(8, 'Jane', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(9, 'Anna', 'Smith', '<EMAIL>', '123456789'));
userss.push(new User11(10, 'Peter', 'Smith', '<EMAIL>', '123456789'));


// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

const filteredUsers: User11[] = userss.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//#pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedUsers: User11[] = userss.sort((a, b):number => b.id - a.id);
console.log(sortedUsers);
