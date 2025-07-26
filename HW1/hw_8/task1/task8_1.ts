//#iz6emEsP2BA
//
// – є масив
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
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
// Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

type Course1 = {
    title: string,
    monthDuration: number
}

const coursesAndDurationArray1: Course1[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

type CourseWithID = Course1 & {id: number};

const arrayWithID: CourseWithID[] = coursesAndDurationArray1.map((course, index) => ({id: index + 1, ...course}));

console.log(arrayWithID);