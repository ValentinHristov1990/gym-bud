import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const NEARBY_GYMS = [
    {
        id: "1",
        name: "Iron Pulse Gym",
        distance: "450 m away",
        hours: "06:00 - 22:30",
        latitude: 42.6977,
        longitude: 23.3219,
    },
    {
        id: "2",
        name: "Northside Barbell Club",
        distance: "1.1 km away",
        hours: "07:00 - 22:00",
        latitude: 42.7015,
        longitude: 23.3265,
    },
    {
        id: "3",
        name: "Atlas Strength & Conditioning",
        distance: "1.6 km away",
        hours: "06:30 - 23:00",
        latitude: 42.6938,
        longitude: 23.3175,
    },
];

export default function MapScreen() {
    const [selectedGym, setSelectedGym] = useState(NEARBY_GYMS[0]);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: NEARBY_GYMS[0].latitude,
                    longitude: NEARBY_GYMS[0].longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                {NEARBY_GYMS.map((gym) => (
                    <Marker
                        key={gym.id}
                        coordinate={{ latitude: gym.latitude, longitude: gym.longitude }}
                        title={gym.name}
                        description={gym.distance}
                        onPress={() => setSelectedGym(gym)}
                    />
                ))}
            </MapView>

            <View style={styles.infoCard}>
                <Text style={styles.gymName}>{selectedGym.name}</Text>
                <Text style={styles.gymMeta}>
                    {selectedGym.distance} · {selectedGym.hours}
                </Text>

                <View style={styles.chipsRow}>
                    {NEARBY_GYMS.map((gym) => {
                        const active = gym.id === selectedGym.id;
                        return (
                            <Pressable
                                key={gym.id}
                                style={[styles.chip, active && styles.chipActive]}
                                onPress={() => setSelectedGym(gym)}
                            >
                                <Text style={[styles.chipText, active && styles.chipTextActive]}>
                                    {gym.name.split(" ")[0]}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },
    map: {
        flex: 1,
    },
    infoCard: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#E2E8F0",
    },
    gymName: {
        fontSize: 17,
        fontWeight: "700",
        color: "#0F172A",
    },
    gymMeta: {
        fontSize: 13,
        color: "#475569",
        marginTop: 4,
    },
    chipsRow: {
        flexDirection: "row",
        gap: 8,
        marginTop: 12,
    },
    chip: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 999,
        backgroundColor: "#F1F5F9",
    },
    chipActive: {
        backgroundColor: "#2563EB",
    },
    chipText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#334155",
    },
    chipTextActive: {
        color: "#FFFFFF",
    },
});