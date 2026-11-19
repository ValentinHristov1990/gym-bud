import { useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function CreateWorkoutScreen() {
    const [title, setTitle] = useState("");
    const [schedule, setSchedule] = useState("");
    const [focus, setFocus] = useState("");

    function handleSave() {

        if (!title) {
            Alert.alert("Missing title", "Please enter a workout name first.");
            return;
        }

        const newWorkout = {
            title,
            schedule: schedule || "Unscheduled",
            focus: focus || "General session",
        };

        Alert.alert(
            "Workout ready",
            `${newWorkout.title} (${newWorkout.schedule})`
        );

        setTitle("");
        setSchedule("");
        setFocus("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Workout Title</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g. Push Day"
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Date / Time</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g. Thu · 18:00"
                value={schedule}
                onChangeText={setSchedule}
            />

            <Text style={styles.label}>Focus / Notes</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Main lifts, sets, notes..."
                value={focus}
                onChangeText={setFocus}
                multiline
            />

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleSave}
            >
                <Text style={styles.buttonText}>Save Workout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#F8FAFC",
    },
    label: {
        fontSize: 13,
        fontWeight: "600",
        color: "#334155",
        marginBottom: 6,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: "#0F172A",
    },
    textArea: {
        minHeight: 84,
        textAlignVertical: "top",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#2563EB",
        paddingVertical: 13,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonPressed: {
        opacity: 0.85,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },
});