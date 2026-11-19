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
        backgroundColor: "#181C24",
    },
    card: {
        backgroundColor: "#242A36",
        borderRadius: 14,
        padding: 18,
        borderWidth: 1,
        borderColor: "#384152",
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#F8FAFC",
    },
    meta: {
        fontSize: 14,
        fontWeight: "600",
        color: "#60A5FA",
        marginTop: 4,
    },
    divider: {
        height: 1,
        backgroundColor: "#384152",
        marginVertical: 14,
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
        color: "#94A3B8",
        textTransform: "uppercase",
        marginBottom: 6,
    },
    body: {
        fontSize: 15,
        color: "#E2E8F0",
        lineHeight: 22,
    },
    actionsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
    },
    editButton: {
        flex: 1,
        backgroundColor: "#334155",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    editButtonText: {
        color: "#F8FAFC",
        fontSize: 15,
        fontWeight: "600",
    },
    deleteButton: {
        flex: 1,
        backgroundColor: "rgba(220, 38, 38, 0.14)",
        borderWidth: 1,
        borderColor: "rgba(248, 113, 113, 0.45)",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    deleteButtonText: {
        color: "#FCA5A5",
        fontSize: 15,
        fontWeight: "600",
    },
    buttonPressed: {
        opacity: 0.82,
    },
});