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

//За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
// Завдання робити через цикли.

type CourseType55 = {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray3: CourseType55[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(const course of coursesAndDurationArray3) {
    let courseDIV: HTMLDivElement = document.createElement('div');
    courseDIV.classList.add('item');
    document.body.appendChild(courseDIV);

    let nameOfCourse: HTMLHeadingElement = document.createElement('h2');
    nameOfCourse.classList.add('heading');
    nameOfCourse.innerText = course.title;

    let durationOfCourse: HTMLParagraphElement = document.createElement('p');
    durationOfCourse.classList.add('description');
    durationOfCourse.innerText = `Тривалість навчання: ${course.monthDuration} міс.`;
    courseDIV.append(nameOfCourse, durationOfCourse);
}
