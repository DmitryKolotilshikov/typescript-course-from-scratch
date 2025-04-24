// Примитивные типы в TypeScript
// =====================================

// Number type
const age: number = 30; 
const price: number = 19.99; 

// String type
const firstName: string = "Alice"; 
const helloMessage: string = `Hello, ${firstName}!`;

// Boolean type
const isAvailable: boolean = true;
const hasPermission: boolean = false;

// Null type
const emptyValue: null = null;

// Undefined type
const notDefined: undefined = undefined;

// Примеры ошибок типизации
// age = "25";
// firstName = 33;
// emptyValue = undefined // НО - ошибки нет, если `strict` в `tsconfig.json` установлен в `false`


console.log(`
    Age: ${age}, 
    Price: ${price}, 
    Name: ${firstName}, 
    Message: ${helloMessage},
    Available: ${isAvailable}, 
    Permission: ${hasPermission}, 
    Empty: ${emptyValue}, 
    Not Defined: ${notDefined}`
);
