// 2. Класс с модификаторами доступа
class BankAccount {
    readonly id: number; // Доступно только для чтения и может устанавливаться в конструкторе
    public accountNumber: string; // Доступно из любого места
    private balance: number; // Доступно только внутри класса
    protected owner: string; // Доступно внутри класса и производных классов

    constructor(id: number, accountNumber: string, owner: string) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
    }

    // Публичный метод для внесения денег
    public deposit(amount: number): void {
        this.balance += amount;
    }

    // Публичный метод для снятия денег
    public withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    // Публичный метод для проверки баланса
    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(123, "1234567890", "Петр Иванов");
account.deposit(1000);
console.log(account.getBalance()); // 1000
account.withdraw(500);
console.log(account.getBalance()); // 500
// console.log(account.owner); // Ошибка: свойство 'owner' доступно только внутри класса и его наследниках
// console.log(account.balance); // Ошибка: свойство 'balance' является приватным