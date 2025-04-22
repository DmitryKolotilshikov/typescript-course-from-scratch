// Type Assertions in TypeScript

/* 
    Утверждения типов — это способ сообщить компилятору TypeScript, что значение имеет определенный тип.
    даже если вывод типа TypeScript не может определить его автоматически. Это похоже на приведение типа в других языках.
*/

// Существует два способа выполнения утверждений типов:

// 1. Angle-bracket syntax (менее распространён, может конфликтовать с JSX/TSX):
const someValue: any = "This is a string";
const stringLength: number = (<string>someValue).length;

console.log(`stringLength: ${strLength}`);

// 2. `as` синтаксис (предпочтительный синтаксис, совместимый с JSX/TSX):
const someValue1: any = "This is a string";
const stringLength1: number = (someValue as string).length;
console.log(`stringLength1: ${stringLength1}`);

// --------------------------------------------------------
// ! non-null assertion operator (оператор утверждения отсутствия null или undefined)
const myElement: HTMLElement | null = document.getElementById('myElement');

// Без `!` компилятор выдаст ошибку, так как myElement может быть равным null.
myElement!.style.color = 'red';
// myElement && (myElement.style.color = 'red');

/* 
Когда необходимы утверждения типов?
- Когда вы знаете больше о типах, чем TypeScript.
- При взаимодействии с библиотеками, которые могут не иметь полной поддержки TypeScript или точных определений типов.

примечание:
    Утверждения типа — это способ сообщить компилятору, что нужно обрабатывать значение как определенный тип.
    Если вы утверждаете значение для неправильного типа и это может привести к ошибкам во время выполнения. 
    Используйте утверждения типа осторожно и только тогда, когда вы уверены в типе.
*/
