import { TaskCircle } from "@/src/components/TaskCircle";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
    const [completed1, setCompleted1] = useState(false);
    const [completed2, setCompleted2] = useState(true);
    
    return (
    <View style={styles.container}>
        <TaskCircle
            emoji="🐾"
            completed={completed1}
            onPress={() => setCompleted1(!completed1)}
        />
        <TaskCircle
            emoji="🐾"
            completed={completed2}
            onPress={() => setCompleted2(!completed2)}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});

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