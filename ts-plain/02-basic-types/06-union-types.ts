// Union Types:
// Тип объединения позволяет переменной иметь один из нескольких типов
// Обозначается символом вертикальной черты (|), разделяющим возможные типы.

let result: number | string;

result = 10; // Валидно: result может быть числом
result = "Success"; // Валидно: result может быть строкой
// result = true;  // Ошибка: result не может быть булевым значением

function printResult(value: number | string) {
    console.log(`Result: ${value}`);
}

printResult(15); // Валидно
printResult("Error"); // Валидно
// printResult(false); // Ошибка
