import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function WorkoutDetailsScreen({ navigation, route }) {
    const workout = route.params?.workout ?? {
        id: "1",
        title: "Workout Details",
        schedule: "No schedule",
        focus: "No notes",
    };

    function handleDelete() {
        Alert.alert(
            "Delete Workout",
            `Are you sure you want to delete "${workout.title}"?`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        navigation.goBack();
                    },
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{workout.title}</Text>
                <Text style={styles.meta}>{workout.schedule}</Text>

                <View style={styles.divider} />

                <Text style={styles.label}>Focus / Notes</Text>
                <Text style={styles.body}>{workout.focus}</Text>

                <View style={styles.actionsRow}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.editButton,
                            pressed && styles.buttonPressed,
                        ]}
                        onPress={() => navigation.navigate("EditWorkout", { workout })}
                    >
                        <Text style={styles.editButtonText}>Edit</Text>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [
                            styles.deleteButton,
                            pressed && styles.buttonPressed,
                        ]}
                        onPress={handleDelete}
                    >
                        <Text style={styles.deleteButtonText}>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#F8FAFC",
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 18,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#0F172A",
    },
    meta: {
        fontSize: 14,
        fontWeight: "600",
        color: "#2563EB",
        marginTop: 4,
    },
    divider: {
        height: 1,
        backgroundColor: "#E2E8F0",
        marginVertical: 14,
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
        color: "#64748B",
        textTransform: "uppercase",
        marginBottom: 6,
    },
    body: {
        fontSize: 15,
        color: "#334155",
        lineHeight: 22,
    },
    actionsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
    },
    editButton: {
        flex: 1,
        backgroundColor: "#0F172A",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    editButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },
    deleteButton: {
        flex: 1,
        backgroundColor: "#FEF2F2",
        borderWidth: 1,
        borderColor: "#FCA5A5",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    deleteButtonText: {
        color: "#DC2626",
        fontSize: 15,
        fontWeight: "600",
    },
    buttonPressed: {
        opacity: 0.82,
    },
});