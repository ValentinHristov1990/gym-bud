import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditWorkoutScreen({ navigation, route }) {
    const workout = route.params?.workout ?? {
        id: "1",
        title: "",
        schedule: "",
        focus: "",
    };

    const [title, setTitle] = useState(workout.title ?? "");
    const [schedule, setSchedule] = useState(workout.schedule ?? "");
    const [focus, setFocus] = useState(workout.focus ?? "");

    function handleSaveChanges() {
        if (!title) {
            Alert.alert("Missing title", "Please enter a workout name first.");
            return;
        }

        const updatedWorkout = {
            ...workout,
            title: title,
            schedule: schedule || "Unscheduled",
            focus: focus || "General session",
        };

        Alert.alert("Changes ready", `Updated: ${updatedWorkout.title}`);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Workout Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="e.g. Push Day"
            />

            <Text style={styles.label}>Date / Time</Text>
            <TextInput
                style={styles.input}
                value={schedule}
                onChangeText={setSchedule}
                placeholder="e.g. Thu · 18:00"
            />

            <Text style={styles.label}>Focus / Notes</Text>
            <TextInput
                style={[styles.input, styles.multilineInput]}
                value={focus}
                onChangeText={setFocus}
                placeholder="Main lifts, sets, notes..."
                multiline
            />

            <View style={styles.actionsRow}>
                <Pressable
                    style={({ pressed }) => [
                        styles.cancelButton,
                        pressed && styles.buttonPressed,
                    ]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.saveButton,
                        pressed && styles.buttonPressed,
                    ]}
                    onPress={handleSaveChanges}
                >
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#181C24",
    },
    label: {
        fontSize: 13,
        fontWeight: "600",
        color: "#CBD5E1",
        marginBottom: 6,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#242A36",
        borderWidth: 1,
        borderColor: "#384152",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: "#F8FAFC",
    },
    multilineInput: {
        minHeight: 96,
        textAlignVertical: "top",
    },
    actionsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 22,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: "#2A313E",
        borderWidth: 1,
        borderColor: "#475569",
        paddingVertical: 13,
        borderRadius: 10,
        alignItems: "center",
    },
    cancelButtonText: {
        color: "#E2E8F0",
        fontSize: 15,
        fontWeight: "600",
    },
    saveButton: {
        flex: 1,
        backgroundColor: "#2563EB",
        paddingVertical: 13,
        borderRadius: 10,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },
    buttonPressed: {
        opacity: 0.85,
    },
});