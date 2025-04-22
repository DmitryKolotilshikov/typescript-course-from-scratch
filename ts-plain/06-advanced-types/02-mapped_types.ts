{
// Mapped Types (Отображаемые типы)

/* 
Mapped Types позволяют создавать новые типы, изменяя или трансформируя существующие типы.
Они полезны для создания более гибких и повторно используемых определений типов.
*/

// 1. Пример использования Mapped Types для создания типа с необязательными свойствами
interface Person {
    name: string;
    age: number;
    address: string;
}

// Создаем новый тип, в котором все свойства Person являются необязательными
type PartialPerson = {
    [P in keyof Person]?: Person[P];
};

const partialPerson1: PartialPerson = { name: "Серега" }; // Валидно: все свойства необязательные

// Partial уже готовый тип, который делает все свойства необязательными
const partialPerson2: Partial<Person> = { name: "Игорек" };


// 2. Пример использования Mapped Types для создания типа с только для чтения свойствами
type ReadonlyPerson = {
    readonly [P in keyof Person]: Person[P];
};

const readonlyPerson: ReadonlyPerson = {
    name: "Alice",
    age: 30,
    address: "123 Main St",
};

// readonlyPerson.age = 31; // Ошибка: нельзя изменить свойство только для чтения

// 3. Пример использования Mapped Types для создания типа с измененными типами свойств
type StringifiedPerson = {
    [P in keyof Person]: string;
};

const stringifiedPerson: StringifiedPerson = {
    name: "Bob",
    age: "25",
    address: "456 Elm St",
};

// 4. Пример использования Mapped Types для создания типа с удаленными свойствами
type PersonWithoutAddress = {
    [P in keyof Person as Exclude<P, "address">]: Person[P];
};

const personWithoutAddress: PersonWithoutAddress = {
    name: "Charlie",
    age: 40,
    // address: "789 Oak St", // Ошибка: свойство 'address' не существует в типе 'PersonWithoutAddress'
};
}