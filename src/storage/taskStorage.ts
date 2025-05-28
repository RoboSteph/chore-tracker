import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types/task";

const STORAGE_KEY = "tasks";

//Ensure history is always defined
const normalizeTask = (task: Task): Task => {
    return tasks.map(task => ({
        ...task,
        history: task.history || {}
    }));
};

export const saveTasks = async (tasks: Task[]) => {
    try {
        const json = JSON.stringify(tasks);
        await AsyncStorage.setItem(STORAGE_KEY, json);
    } catch (error) {
        console.error("Error saving tasks:", error);
    }
};

export const loadTasks = async (): Promise<Task[]> => {
    try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        const tasks = json ? JSON.parse(json) : [];

        // Normalize tasks to ensure each has a history object
        return tasks.map((task: Task) => ({
            ...task,
            history: task.history || {}
        }));
    } catch (error) {
        console.error("Error loading tasks:", error);
        return [];
    }
};
