export {} // благодаря этой записи тайпскрипт видит этот файл как модуль

declare global {
    interface Window {
        myCustomProperty: string;
    }
}