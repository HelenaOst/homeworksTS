//Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь

async function fetchData <SomeType>(url: string): Promise<SomeType> {
    if (!url) {
        throw new Error('url is required');
    }else{
        const res: Response = await fetch(url);
        const data: SomeType = await res.json();
        if (data){
            return data as SomeType;
        }}
    throw new Error(`data is not found`);
}

//
interface User555 {
    id: number;
    name: string;
    email: string;
}
//
fetchData<User555>('https://jsonplaceholder.typicode.com/users/1');