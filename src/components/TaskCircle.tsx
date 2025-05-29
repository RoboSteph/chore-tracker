import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

interface TaskCircleProps {
    emoji?: string;
    completed: boolean;
    onPress: () => void;
}

export const TaskCircle = ({ emoji, completed, onPress }: TaskCircleProps) => {
    return (
        <View style={styles.circleWrapper}>   
            <Pressable onPress={onPress} style={{flex: 1}}>
                <View style={[styles.circle, completed && styles.circleCompleted]}>
                    {emoji ? (
                        <Text style={[styles.emoji, !completed && styles.emojiDimmed]}>
                            {emoji}
                        </Text>
                        ) : null}
                    {completed && (
                        <Text style={styles.checkmark}> ✅ </Text>
                    )}
                </View>
            </Pressable>
        </View>
    );
};

const CIRCLE_SIZE = Dimensions.get("window").width * 0.6; // 60% of screen width

const styles = StyleSheet.create({
    circle: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: "#d3d3d3",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#f0f0f0",
    },
    circleCompleted: {
        backgroundColor: "#a4edb5",
        borderColor: "#22b544",
    },
    emoji: {
        fontSize: CIRCLE_SIZE * 0.7,
        opacity: 1,
        alignItems: "center",
    },
    emojiDimmed: {
        opacity: 0.2,
    },
    checkmark: {
        position: "absolute",
        right: "10%",
        bottom: "10%",
        fontSize: CIRCLE_SIZE * 0.2, // 20% of circle size
    },
    circleWrapper: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        marginVertical: 24, //space between circles
    },
});