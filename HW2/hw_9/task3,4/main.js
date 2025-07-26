"use strict";
//#jeBqHV525U5
//
// – Є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.
let coursesAndDurationArray3 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const course of coursesAndDurationArray) {
    let courseDIV = document.createElement('div');
    courseDIV.classList.add('item');
    document.body.appendChild(courseDIV);
    let nameOfCourse = document.createElement('h2');
    nameOfCourse.classList.add('heading');
    nameOfCourse.innerText = course.title;
    let durationOfCourse = document.createElement('p');
    durationOfCourse.classList.add('description');
    durationOfCourse.innerText = `Тривалість навчання: ${course.monthDuration} міс.`;
    courseDIV.append(nameOfCourse, durationOfCourse);
}
