// Объекты и копирование объектов
// Задача: Создание и вывод объекта
let person = {
name: "Николай",
age: 35,
city: "Самара",
}

console.log(person);

// Задача: Копирование объекта
const original = {
name: "Николай",
age: 35
};
const copy = { ...original };
copy.age = 18;
console.log(original.age);
console.log(copy.age);

// Задача: Копирование объекта с Object.assign
const person_1 = {
name: "Иван",
age: 35
};
const clone = Object.assign({}, person_1);
copy.age = 20;
console.log(original.age);
console.log(copy.age);

// Опциональная цепочка ?.
// Задача: Проверка наличия свойства
const user = {
name: "Николай",
address: {
city: "Самара"
}
};
const city = user && user.address && user.address.city;
console.log(city);
const optionalCity = user?.address?.city;
console.log(city);

// Задача: Работа с вложенными свойствами
const user_1 = {
name: "Николай",
address: {
city: "Самара"
}
};
console.log(user_1?.address?.city);
console.log(user_1?.address?.postIndex); 

// Задача: Безопасный доступ к элементам массива
const data = {
items: [5, 10, 15]
};
const firstItem = data.items?.[0];
console.log(firstItem);
const newData = {
};
const newFirstItem = newData.items?.[0];
console.log(newFirstItem);

// Задача: Получение ключей объекта
// Пример объекта person
const person_2 = {
name: "Николай",
age: 35,
job: "сборщик лего"
};
const keys = Object.keys(person_2);
console.log(keys);

// Задача: Получение значений объекта
const car = {
make: "Лада",
model: "Веста",
year: 2024,
color: "мокрый асфальт"
};
const values = Object.values(car);
console.log(values);

// Задача: Получение пар ключ-значение
const person_3 = {
name: "Николай",
age: 35,
job: "фотограф человека-паука"
};
const entries = Object.entries(person_3);
console.log(entries);

// Формат JSON
// Задача: Преобразование объекта в JSON
const user_2 = {
name: "Николай",
age: 35,
email: "nick@gmail.com"
};
const jsonString = JSON.stringify(user_2);
console.log(jsonString);

// Задача: Преобразование JSON в объект
const jsonString_1 = '{"name":"Николай","age":35,"email":"nick@gmail.com"}';
const userObject = JSON.parse(jsonString_1);
console.log(userObject);

// Задача: Обработка JSON с вложенными объектами
const jsonString_2 = {
"name": "Николай",
"age": 35,
"email": "alice@example.com",
"address": {
"street": "Ленина",
"city": "Самара",
"zip": "123123"
},
"hobbies": ["фитнесс", "хайкинг", "велосипед"]
};
const userObject_2 = JSON.parse(jsonString);
console.log(userObject_2);

// Массивы и методы массивов
// Задача: Создание массива и добавление элемента
const fruits = ["яблоко", "банан"];
fruits.push("груша");
console.log(fruits);

// Задача: Использование метода .map()
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);
console.log(squares);

// Задача: Фильтрация массива с .filter()
const numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers_1 = numbers_1.filter(number => number % 2 === 0);
console.log(evenNumbers_1);

// Деструктуризация и деструктурирующее присваивание
// Задача: Деструктуризация объекта
const person_4 = {
name: "Николай",
age: 35
};
const { name, age } = person_4;
console.log(name);
console.log(age);

// Задача: Деструктуризация массива
const fruits_1 = ["яблоко", "банан", "груша"];
const [first, second] = fruits_1;
console.log(first);
console.log(second);

// Задача: Деструктурирующее присваивание с значениями по умолчанию
const person_5 = {
person_name: "Николай"
};
const {person_name = "Неизвестно", person_age = 0 } = person_5;
console.log(person_name);
console.log(person_age);