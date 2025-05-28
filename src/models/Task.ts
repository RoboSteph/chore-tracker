export interface Task {
    id: string;
    name: string;
    emoji: string;
    history: {
        [date: string]: { count: number; timestamps?: string[] } // number of times task was completed
    };
}