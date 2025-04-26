// Intersection Types (Типы пересечения):
// Тип пересечения объединяет несколько типов в один Результирующий тип
// обладает всеми свойствами объединенных типов
// Он обозначается символом амперсанда (&)

interface Name {
    name: string;
  }
  
interface Age {
  age: number;
}

type Person = Name & Age;  // Person должен иметь оба свойства name и age

const person: Person = {
  name: "Alice",
  age: 30,
};

console.log(person.name, person.age); // Валидно

// const incompletePerson: Person = { name: "Bob" };  // Ошибка

// =======================================
// Использование пересечения типов с существующими объектами:
interface Address {
  street: string;
  city: string;
}

const user = {
  id: 1,
  name: "Вася",
};

type UserWithAddress = typeof user & Address;

const userWithAddress: UserWithAddress = {
  ...user,
  street: "123 Main St",
  city: "Ямайка",
};

// { id: 1, name: 'Вася', street: '123 Main St', city: 'Ямайка' }
console.log(userWithAddress);

// =======================================
// Literal Types (Литеральные типы)
// Литеральные типы позволяют указать точные значения, которые может иметь тип.

type Status = "success" | "error" | "pending";
type Result = 0 | 1 | 2;

const _status: Status = "success";
const _result: Result = 0;

console.log(_status, _result);