// Типизация функций в TypeScript
// ======================================

// 1. Базовая типизация функции
function greet(name: string): string {
    return `Привет, ${name}!`;
}

// 2. Функция без возвращаемого значения
function logMessage(message: string): void {
    console.log(message);
}

// 3. Функция с несколькими параметрами
function calculateSum(a: number, b: number): number {
    return a + b;
}

// 4. Функция с параметрами по умолчанию
function createGreeting(name: string, greeting: string = "Привет"): string {
    return `${greeting}, ${name}!`;
}

// 5. Функция с остаточными параметрами
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 6. Стрелочные функции с типизацией
const multiply = (a: number, b: number): number => a * b;


// Примеры использования
console.log(greet("Иван")); // Привет, Иван!
logMessage("Сообщение в консоль");
console.log(calculateSum(5, 3)); // 8
console.log(createGreeting("Мария")); // Привет, Мария!
console.log(createGreeting("Алексей", "Здравствуй")); // Здравствуй, Алексей!
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(multiply(4, 5)); // 20
