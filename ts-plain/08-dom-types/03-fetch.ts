// Fetch types

const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const fetchTodos = async (): Promise<void> => {
    try {
        const response: Response = await fetch(API_URL);
        const data: ITodo = await response.json();

        console.log(data);
    } catch (error: unknown) {
        console.error(error instanceof Error ? error.message : "Unknown error");
    }
};

fetchTodos();