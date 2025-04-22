// any допускает любой тип без проверки типа
// unknown требует проверки типа перед использованием

const anyValue: any = "this is a string";
const strLength: number = anyValue.length;
// const _strLength: number = anyValue.map((item: any) => item.length); // TypeError: anyValue.map is not a function

let value: unknown;

value = 10;
value = "Hello";
value = true;

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
