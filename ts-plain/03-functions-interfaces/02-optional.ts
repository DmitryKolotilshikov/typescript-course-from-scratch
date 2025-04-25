// ? - опциональный параметр

function greetHello(name: string, message?: string): string {
    if (message) {
      return `Hello, ${name}, ${message}`;
    } else {
      return `Hello, ${name}`;
    }
}

console.log(greetHello("John")); // Hello, John
console.log(greetHello("Jane", "Goodbye!")); // Hello, Jane, Goodbye!
