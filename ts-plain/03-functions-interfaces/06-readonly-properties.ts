// Readonly свойства в TypeScript
// =====================================

// 1. Readonly свойства в интерфейсах
interface UserReadonly {
    readonly id: number;
    name: string;
    readonly birthDate: Date;
}

const user5: UserReadonly = {
    id: 1,
    name: "Анна",
    birthDate: new Date("1990-01-01")
};
// user5.id = 2; // Ошибка: Cannot assign to 'id' because it is a read-only property
// user5.name = "Анна Иванова"; // Можно изменить


// 2. Readonly массивы
const numbers: readonly number[] = [1, 2, 3, 4, 5];
// const numbers: Readonly<number[]> = [1, 2, 3, 4, 5];
// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6); // Ошибка: Property 'push' does not exist on type 'readonly number[]'
// numbers[0] = 10; // Ошибка: Index signature in type 'readonly number[]' only permits reading

// 3. Readonly кортежи
const point: readonly [number, number] = [10, 20];

// 4. Readonly свойства в классах
class Article {
    readonly id: number;
    title: string;
    
    constructor(id: number, title: string) {
        this.id = id; // Можно установить только в конструкторе
        this.title = title;
    }
    
    changeId(newId: number) { 
       // this.id = newId; // Ошибка: Cannot assign to 'id' because it is a read-only property
    }
}

// Рекомендации:
// 1. Используйте readonly для защиты от случайных изменений
// 2. Применяйте readonly к критически важным свойствам (id, внешние ключи)
// 3. Используйте Readonly<T> для создания неизменяемых объектов
// 4. Помните, что readonly защищает только от прямых присваиваний 