// Основы классов в TypeScript
// ==================================

// Базовое объявление класса
class User {
    // Свойства класса
    name: string;
    age: number;

    // Конструктор
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Методы класса
    greet(): void {
        console.log(`Привет, меня зовут ${this.name} и мне ${this.age}!`);
    }

    // Методы класса
    isAdult(): boolean {
        return this.age >= 18;
    }
}

const userInstance = new User("Иван", 30);
console.log(userInstance.greet()); // "Привет, меня зовут Иван и мне 30!"
console.log(userInstance.isAdult()); // true
