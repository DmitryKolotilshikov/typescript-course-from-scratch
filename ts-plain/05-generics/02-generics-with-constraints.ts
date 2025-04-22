// Пример дженерика с ограничением
function logValue<T extends { value: string }>(obj: T): void {
    console.log(obj.value);
}
  
logValue({ value: "Hello" }); // Работает нормально
// logValue({ val: "Hi" }); // Ошибка: Отсутствует свойство 'value'

// ------------------------------------------------------------
// Пример универсального класса с типом по умолчанию
class DataHolder<T = string> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

// Пример использования
const stringHolder = new DataHolder("Some string");
console.log(stringHolder.getData()); // Output: Some string

const numberHolder = new DataHolder(123);
console.log(numberHolder.getData()); // Output: 123

// const defaultHolder = new DataHolder();
