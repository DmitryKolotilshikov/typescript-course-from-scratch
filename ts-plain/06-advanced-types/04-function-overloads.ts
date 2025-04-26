// Перегрузка функций в TypeScript
// ======================================

/* 
Перегрузка функций - это способ определить несколько функций с одним именем, но разными параметрами и возвращаемыми значениями.

Это нужно в случаях, когда мы хотим иметь несколько функций с одним именем, но разными параметрами и возвращаемыми значениями.
Это безопасный способ реализовать полиморфизм в TypeScript.
*/

// 1. Базовая перегрузка функций
function getMessage(message: string): string;
function getMessage(message: number): number;
function getMessage(message: string | number): string | number {
    if (typeof message === "string") {
        return `Строковое сообщение: ${message}`;
    } else {
        return message;
    }
}

console.log(getMessage("Привет"));
console.log(getMessage(42));

// 2. Перегрузка с разным количеством параметров
function processString(str: string): string;
function processString(str: string, repeat: number): string;
function processString(str: string, repeat?: number): string {
    if (repeat === undefined) {
        return str;
    } else {
        return str.repeat(repeat);
    }
}

console.log(processString("Hello"));
console.log(processString("Hello", 3));

// 3. Перегрузка методов класса
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        return `${a}${b}`;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.add("Hello, ", "World")); // "Hello, World"
