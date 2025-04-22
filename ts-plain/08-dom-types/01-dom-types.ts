{
// DOM Types

// 1. Типы для HTML элементов

const myElement: HTMLElement | null = document.getElementById('myElement');

// 2. Типы для HTML элементов с атрибутами

// const myInput: HTMLInputElement | null = document.getElementById('myInput');
const myInput: HTMLInputElement | null = document.querySelector("#input");

// 3. Типы для HTML элементов с атрибутами

const myButton: HTMLButtonElement | null = document.querySelector("button");

// 4. Типы для HTML элементов с атрибутами

const mySelect: HTMLSelectElement | null = document.querySelector('select');

// 5. Типы для HTML элементов с атрибутами

const myTextarea: HTMLParagraphElement | null = document.querySelector('p');
}