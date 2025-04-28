{
// Utility Types (Утилитарные типы) 
/* 
Utility Types в TypeScript предоставляют полезные инструменты для работы с типами.
Они позволяют изменять и комбинировать существующие типы для создания новых типов.
*/

// 1. Partial<Type>
// Создает новый тип, в котором все свойства Type являются необязательными.
interface IUser {
    id: number;
    name: string;
    age: number;
}

const partialUser: Partial<IUser> = {}; // Валидно: все свойства необязательные
const partialUser2: Partial<IUser> = { name: "Вася" };

// 2. Readonly<Type>
// Создает новый тип, в котором все свойства Type являются только для чтения.
const user: Readonly<IUser> = {
    id: 1,
    name: "Alice",
    age: 25,
};

// user.id = 2; // Ошибка: нельзя изменить свойство только для чтения

// 3. Record<Keys, Type>
// Создает объектный тип с набором свойств Keys, которые имеют тип Type.
type Role = "admin" | "user" | "guest";

const rolePermissions: Record<Role, string[]> = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
};

console.log(rolePermissions.admin); // Output: ["read", "write", "delete"]

// 4. Pick<Type, Keys>
// Создает новый тип, выбирая набор свойств Keys из Type.
type UserPreview = Pick<IUser, "id" | "name">;
// interface IUserPreview extends Pick<IUser, "id" | "name"> {}

const preview: UserPreview = {
    id: 1,
    name: "Alice",
    // age: 25, // Ошибка: свойство 'age' не существует в типе 'UserPreview'
};

// 5. Omit<Type, Keys>
// Создает новый тип, исключая набор свойств Keys из Type.
type UserWithoutAge = Omit<IUser, "age">;

const userWithoutAge: UserWithoutAge = {
    id: 1,
    name: "Bob",
    // age: 30, // Ошибка: свойство 'age' не существует в типе 'UserWithoutAge'
};
}
