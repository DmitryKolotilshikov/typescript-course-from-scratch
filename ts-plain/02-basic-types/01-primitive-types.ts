// Примитивные типы в TypeScript
// =====================================

// Number type
let age: number = 30; 
let price: number = 19.99; 

// String type
let firstName: string = "Alice"; 
let helloMessage: string = `Hello, ${firstName}!`;

// Boolean type
let isAvailable: boolean = true;
let hasPermission: boolean = false;

// Null type
let emptyValue: null = null;

// Undefined type
let notDefined: undefined = undefined;

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
