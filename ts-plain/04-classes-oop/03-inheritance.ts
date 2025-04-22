// Наследование в TypeScript
// ================================================

// Базовый класс
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Метод будет переопределен в подклассах
    makeSound(): void {
      console.log("Generic animal sound");
    }
  }
  
// Подкласс, наследующий от базового класса
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
      super(name); // Вызов конструктора базового класса
      this.breed = breed;
    }
  
    // Перезаписывает метод makeSound базового класса
    makeSound(): void {
      console.log("Гаф! Гаф!");
    }
}
  
// Еще один подкласс, наследующий от базового класса
class Cat extends Animal {
    color: string;

    constructor(name: string, color: string) {
      super(name);
      this.color = color;
    }

    // Перезаписывает метод makeSound базового класса
    makeSound(): void {
      console.log("Мяу!");
    }
}

// Создаем экземпляры разных классов
const myDog = new Dog("Чапик", "Лабрадор");
const myCat = new Cat("Серафима", "Персидская");

myDog.makeSound(); // "Гаф! Гаф!"
myCat.makeSound(); // "Мяу!"
