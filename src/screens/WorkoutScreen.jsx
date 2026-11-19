import { Pressable, StyleSheet, Text, View } from "react-native";

const UPCOMING_WORKOUTS = [
    {
        id: "1",
        title: "Upper Body Strength",
        schedule: "Tomorrow · 08:30",
        focus: "Bench press, rows, overhead press",
    },
    {
        id: "2",
        title: "Lower Body & Core",
        schedule: "Sat · 10:00",
        focus: "Squats, Romanian deadlifts, planks",
    },
    {
        id: "3",
        title: "Conditioning & Mobility",
        schedule: "Mon · 18:00",
        focus: "Intervals, core stability, stretch",
    },
    {
        id: "4",
        title: "Pull Session",
        schedule: "Wed · 17:30",
        focus: "Pull-ups, face pulls, curls",
    },
];

export default function WorkoutScreen({ navigation }) {
    const nextThreeWorkouts = UPCOMING_WORKOUTS.slice(0, 3);

    return (
        <View style={styles.container}>
            <Text style={styles.brand}>GymBud</Text>
            <Text style={styles.heading}>Upcoming Workouts</Text>

            <View style={styles.list}>
                {nextThreeWorkouts.map((workout) => (
                    <Pressable
                        key={workout.id}
                        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
                        onPress={() =>
                            navigation.navigate("WorkoutDetails", { workout })
                        }
                    >
                        <Text style={styles.cardTitle}>{workout.title}</Text>
                        <Text style={styles.cardMeta}>{workout.schedule}</Text>
                        <Text style={styles.cardFocus}>{workout.focus}</Text>
                    </Pressable>
                ))}
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
    brand: {
        fontSize: 22,
        fontWeight: "700",
        color: "#0F172A",
    },
    heading: {
        fontSize: 15,
        color: "#475569",
        marginTop: 2,
        marginBottom: 14,
    },
    list: {
        gap: 10,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    cardPressed: {
        opacity: 0.8,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#0F172A",
    },
    cardMeta: {
        fontSize: 13,
        color: "#2563EB",
        marginTop: 3,
        fontWeight: "500",
    },
    cardFocus: {
        fontSize: 13,
        color: "#64748B",
        marginTop: 4,
    },
});