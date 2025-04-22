 // Интерфейсы и типы в TypeScript
// =================================

// Интерфейсы и Типы определяют структуру объекта и могут включать свойства, методы и индексы.

// Интерфейс для описания структуры объекта пользователя
interface UserInterface {
    name: string;
    age: number;
    email: string;
    // greet(): string;
    greet: () => string;
}

// Реализация интерфейса
const user1: UserInterface = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user1.greet()); // Hello, my name is Alice

// Тип для описания структуры объекта пользователя
type UserType = {
    name: string;
    age: number;
    email: string;
    greet: () => string;
};

// Реализация типа
const user2: UserType = {
    name: "Nik",
    age: 25,
    email: "nik@example.com",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user2.greet()); // Hello, my name is Nik

// Различия между интерфейсами и типами:
// 1. Интерфейсы могут расширяться друг от друга или от классов, а типы могут объединяться с помощью оператора &.
// 2. Интерфейсы более предпочтительны для описания структуры объектов, в то время как типы более универсальны и могут описывать объединения, пересечения и примитивы.
// 3. Интерфейсы могут быть повторно открыты для добавления новых свойств, а типы — нет.

interface ExtendedUserInterface extends UserInterface {
    role: string;
}
// interface ExtendedUserInterface {
//     role: string;
//     role2: string;
// }

const user3: ExtendedUserInterface = {
    name: "Alex",
    age: 28,
    email: "alex@example.com",
    role: "admin",
    // role2: "barmen",
    greet() {
        return `Hello, my name is ${this.name} and I am an ${this.role}`;
    }
};

console.log(user3.greet()); // Hello, my name is Alex and I am an admin

type ExtendedUserType = UserType & {
    role: string;
};

const user4: ExtendedUserType = {
    name: "Daria",
    age: 35,
    email: "daria@example.com",
    role: "user",
    greet() {
        return `Hello, my name is ${this.name} and I am a ${this.role}`;
    }
};

console.log(user4.greet()); // Hello, my name is Daria and I am a user
