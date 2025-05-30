import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    useWindowDimensions,
    View
} from "react-native";

interface TaskCircleProps {
    emoji?: string;
    completed: boolean;
    onPress: () => void;
}

// const CIRCLE_SIZE = Dimensions.get("window").width * 0.6; // 60% of screen width
// const { width } = require("react-native").Dimensions.get("window");


export const TaskCircle = ({ emoji, completed, onPress }: TaskCircleProps) => {
    const { width } = useWindowDimensions();
    const CIRCLE_SIZE = Math.min(width * 0.4, 150); // 40% of screen width, max 150px

    const dynamicCircleStyle = {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        backgroundColor: completed ? "#a4edb5" : "#f0f0f0",
        borderColor: completed ? "#22b544" : "#d3d3d3",
        marginVertical: 24, //space between circles
    };

    const dynamicEmojiStyle = {
        fontSize: CIRCLE_SIZE * 0.7, // 70% of circle size
        opacity: completed ? 1 : 0.2,
    };

    const dynamicCheckmarkStyle = {
        fontSize: CIRCLE_SIZE * 0.2, // 20% of circle size
        right: CIRCLE_SIZE * 0.1, // 10% of circle size
        bottom: CIRCLE_SIZE * 0.1, // 10% of circle size
    };

    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <View style={[styles.circle, dynamicCircleStyle]}>
                {emoji && <Text style={[styles.emoji, dynamicEmojiStyle]}>{emoji}</Text>}
                {completed && <Text style={[styles.checkmark, dynamicCheckmarkStyle]}> ✅ </Text>}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        margin: 8,
    },
    circle: {
        borderRadius: 9999,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    emoji: {
        //dynamic styles are applied at runtime
    },
    checkmark: {
        position: "absolute",
    },
});