{
// Higher-Order Generics (Дженерики высшего порядка)

/* 
Higher-Order Generics  — это универсальный тип, который принимает другой универсальный тип в качестве аргумента.

Это позволяет создавать еще более гибкие и повторно используемые определения типов.
*/

type Mapper<T, U> = (value: T) => U;

/**
 * Высшая порядковая функция, которая применяет функцию преобразования к массиву значений.
 *
 * @param array Массив значений для преобразования
 * @param mapper Функция преобразования для применения к каждому значению
 * @returns Массив преобразованных значений
 */
function transformArray<T, U>(array: T[], mapper: Mapper<T, U>): U[] {
    return array.map(mapper);
}

// 1. Mapping чисел к строкам:
const numbers = [1, 2, 3, 4, 5];
const numberToString: Mapper<number, string> = (num) => num.toString();
const stringifiedNumbers = transformArray(numbers, numberToString); 
console.log(stringifiedNumbers); // Result: ["1", "2", "3", "4", "5"]


// ------------------------------------------------------------
// 2. Mapping объектов к конкретным свойствам:
interface IProduct {
  id: number;
  name: string;
  price: number;
}

const products: IProduct[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
];

const extractProductName: Mapper<IProduct, string> = (product) => product.name;
const productNames = transformArray(products, extractProductName);
console.log(productNames); // Result: ["Laptop", "Mouse", "Keyboard"]

const extractProductId: Mapper<IProduct, number> = (product) => product.id;
const productIds = transformArray(products, extractProductId);
console.log(productIds); // Result: [1, 2, 3]
}
