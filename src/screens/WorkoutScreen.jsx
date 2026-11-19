import { StyleSheet, Text, View } from "react-native";

export default function WorkoutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.brand}>GymBud</Text>
            <Text style={styles.subtitle}>WorkoutScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    brand: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
    },
});