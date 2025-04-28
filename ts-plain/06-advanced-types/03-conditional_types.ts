{
// Conditional Types (Условные типы)

/* 
Conditional Types позволяют создавать типы, которые зависят от условия.
Они полезны для создания более гибких и адаптивных определений типов.
*/

// 1. Conditional Types для проверки типа
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;    // type A = true
type B = IsString<number>;     // type B = false

// 2. Conditional Types для фильтрации типов

type FilterStrings<T> = T extends string ? T : never;

type MixedTypes = 'a' | 1 | 'b' | 2 | 'c';
type OnlyStrings = FilterStrings<MixedTypes>; // type OnlyStrings = "a" | "b" | "c"

// 3. Извлечение типа возвращаемого значения функции

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
    return "Hello, World!";
}

function getNumber(): number {
    return 69;
}

type StringReturnType = ReturnTypeOf<typeof getString>; // StringReturnType будет string
type NumberReturnType = ReturnTypeOf<typeof getNumber>; // NumberReturnType будет number
}
