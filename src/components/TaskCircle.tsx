import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TaskCircleProps {
    emoji?: string;
    completed: boolean;
    onPress: () => void;
}

export const TaskCircle = ({ emoji, completed, onPress }: TaskCircleProps) => {
    return (
        <Pressable onPress={onPress}>
            <View style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    borderWidth: 2,
                    borderColor: completed ? "green" : "#d3d3d3",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: completed ? "#e0ffe0" : "#f0f0f0",
                    position: "relative",
                }}
            >
                {emoji ? (
                    <Text 
                        style={{
                            fontSize: 32,
                            opacity: completed ? 1 : 0.3, // Dimmed if not yet complete
                        }}
                    >
                        {emoji}
                    </Text>
                    ) : null}
                {completed && (
                    <Text 
                        style={{
                            position: "absolute",
                            right: 5,
                            bottom: 5,
                            fontSize: 20,
                            color: "green",
                        }}
                    >
                        ✅
                    </Text>
                )}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#aaa",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "blue",
    },
    circleCompleted: {
        borderColor: "#4CAF50",
    },
    emoji: {
        fontSize: 32,
    },
    emojiDimmed: {
        opacity: 0.5,
    },
    checkmark: {
        position: "absolute",
        right: 0,
        bottom: 0,
        fontSize: 18,
    },
});