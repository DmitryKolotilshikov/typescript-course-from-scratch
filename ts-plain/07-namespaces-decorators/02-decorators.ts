{
// Декораторы в TypeScript - это специальный вид объявления, который можно прикрепить
// к классу, методу, свойству или параметру. Они позволяют добавить дополнительную
// функциональность или изменить поведение элемента, к которому прикреплены.
// Декораторы нужны для метапрограммирования - возможности модифицировать код во время
// выполнения программы, добавляя или изменяя поведение элементов кода динамически.

// Чтобы декораторы работали в tsconfig.json нужно включить "experimentalDecorators": true,
// также можно использовать //@ts-ignore чтобы отключить проверку на ошибки (используйте в крайнем случае)

// Декораторы класса для логирования
function Logging1(constructor: Function) {
    console.log("ClassLogging1", constructor);
}
function Logging2(target: any, propertyKey: string | Symbol): void {
    console.log("ClassLogging2 [target]", target);
    console.log("ClassLogging2 [propertyKey]", propertyKey);
}
function Logging3(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    console.log("ClassLogging3 [target]", target);
    console.log("ClassLogging3 [propertyKey]", propertyKey);
    console.log("ClassLogging3 [descriptor]", descriptor);
}

@Logging1
class MyClass {
    @Logging2
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Logging3
    getName(): string {
        return this.name;
    }
}

const myClass = new MyClass('Маша');

// --------------------------------------------------------
// декоратор @Component

interface ComponentMetadata {
    selector: string;
    template: string;
}

type Constructor = new (...args: any[]) => any;

function Component(metadata: ComponentMetadata) {
    return function<T extends Constructor>(OriginalConstructor: T) {
      return class extends OriginalConstructor {
        constructor(...args: any[]) {
          super(...args);

          const element = document.querySelector(metadata.selector);

          if (element) {
            const processedTemplate = metadata.template.replace(
              /{{(.*?)}}/g, 
              (_, prop) => this[prop.trim()] || ''
            );

            element.innerHTML = processedTemplate;
          }
        }
      };
    };
}

@Component({
    selector: "#app-root",
    template: "<h2>{{title}}</h2>",
})
class AppComponent {
    title = "Привет мир!";

    constructor() {
        console.log("AppComponent создан");
    }
}

const app = new AppComponent();

// --------------------------------------------------------
// Декоратор для проверки прав доступа
function checkPermission(role: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (role !== 'admin') {
                console.log(`Доступ запрещен для роли: ${role}`);
                return;
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

class SecureService {
    @checkPermission('admin')
    performSensitiveOperation(): void {
        console.log('Выполнение чувствительной операции');
    }
}

const service = new SecureService();
service.performSensitiveOperation();
}
