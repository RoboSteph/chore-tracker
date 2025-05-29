import { TaskCircle } from "@/src/components/TaskCircle";
import React from "react";
import { Text, View } from "react-native";

console.log("✅ App rendered!");

// export default function App() {
//   useEffect(() => {
//     const testStorage = async () => {
//       //Task without history to test
//         const incompleteTask = {
//             id: "2",
//             name: "Test task without history",
//             emoji: "🚧",
//             // no history
//         };
        
//         await saveTasks([incompleteTask]); //force save

//         const loadedTasks = await loadTasks();
//         console.log("Loaded tasks after normalization:", loadedTasks);
        
//         //Check history for first task
//         console.log("History field exists:", loadedTasks[0]?.history);
//     };
//     testStorage();
//   }, []);


export default function App() {
    return (
        <View style={{ padding: 50 }}>
        <Text>Check console for storage test results</Text>
        <TaskCircle emoji="💧" completed={false} />
        <TaskCircle emoji="💧" completed={true} />
        </View>
    );
}