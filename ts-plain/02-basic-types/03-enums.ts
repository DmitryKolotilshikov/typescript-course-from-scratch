// Пример 3: Перечисления (Enums) в TypeScript
// =========================================

// 1. Числовые перечисления (Enums)
// По умолчанию enum делает нумерацию своих свойств с 0.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const move: Direction = Direction.Up;
console.log(move);

// 2. Строковые перечисления (Enums)
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

const favoriteColor: Color = Color.Blue;
console.log(favoriteColor); 

// 3. Перечисления с пользовательскими значениями
enum ResponseCode {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

const responseCode: ResponseCode = ResponseCode.NotFound;
console.log(responseCode);

// 4. Гетерогенные перечисления (смешанные типы)
enum MixedEnum {
    No = 0,
    Yes = "YES"
}


console.log(Direction[0]); // Выведет: "Up"
console.log(Direction[Direction.Up]); // Выведет: "Up"

// Примеры ошибок
// let wrongDirection: Direction = 5;
// let wrongColor: Color = "YELLOW"; // Ошибка: "YELLOW" не является допустимым значением Color 