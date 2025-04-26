// Абстрактные классы в TypeScript

abstract class Shape {
    // Абстрактный метод, который должен быть реализован в подклассах
    abstract calculateArea(): number;
  
    // Метод, который может быть использован всеми фигурами
    displayShapeType(shapeType: string): void {
      console.log(`Это ${shapeType}.`);
    }
  }
  
// Интерфейс с дополнительными свойствами для круга
interface ICircleProperties {
    radius: number;
}
  
// Класс, наследующий от абстрактного класса и реализующий интерфейс
class Circle extends Shape implements ICircleProperties {
    radius: number;

    constructor(radius: number) {
        super(); // Вызов конструктора базового класса
        this.radius = radius;
    }

    // Имплементация абстрактного метода из базового класса
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
  
// Интерфейс с дополнительными свойствами для прямоугольника 
interface IRectangleProperties {
    width: number;
    height: number;
}

// Класс Прямоугольник, наследующий от абстрактного класса и реализующий интерфейс
class Rectangle extends Shape implements IRectangleProperties {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Имплементация абстрактного метода из базового класса
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Пример использования
const myCircle = new Circle(5);
myCircle.displayShapeType("Круг"); // Это Круг.
console.log(`Площадь круга: ${myCircle.calculateArea()}`); // Площадь круга: 78.53981633974483

const myRectangle = new Rectangle(4, 6);
myRectangle.displayShapeType("Прямоугольник"); // Это Прямоугольник.
console.log(`Площадь прямоугольника: ${myRectangle.calculateArea()}`); // Площадь прямоугольника: 24
