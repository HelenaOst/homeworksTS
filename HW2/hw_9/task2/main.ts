// #OPLI89c9G
//
// – Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const array111: string[] = ['Main', 'Products', 'About us', 'Contacts'];

let myUlElement: HTMLUListElement | null = document.querySelector ('ul.mainList');

if (myUlElement) {
for(const element of array111) {
    let li: HTMLLIElement = document.createElement('li');
    li.innerText = element;
    myUlElement.appendChild(li);
}
}