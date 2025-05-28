import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { loadTasks, saveTasks } from "../src/storage/taskStorage";

console.log("✅ App rendered!");

export default function App() {
  useEffect(() => {
    const testStorage = async () => {
      //Task without history to test
        const incompleteTask = {
            id: "2",
            name: "Test task without history",
            emoji: "🚧",
            // no history
        };
        
        await saveTasks([incompleteTask]); //force save

        const loadedTasks = await loadTasks();
        console.log("Loaded tasks after normalization:", loadedTasks);
        
        //Check history for first task
        console.log("History field exists:", loadedTasks[0]?.history);
    };
    testStorage();
  }, []);

    return (
        <View style={{ padding: 50 }}>
        <Text>Check console for storage test results</Text>
        </View>
    );
}