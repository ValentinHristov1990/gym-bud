import { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const bgImage = require("../asserts/bg-img.jpg");

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (!email || !password) {
            Alert.alert("Missing fields", "Enter your email and password.");
            return;
        }
        navigation.replace("MainTabs");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screen}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                bounces={false}
            >
                <View style={styles.topHalf}>
                    <Image source={bgImage} style={styles.image} resizeMode="cover" />
                </View>

                <View style={styles.bottomHalf}>
                    <View style={styles.card}>
                        <Text style={styles.title}>GymBud</Text>

                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            placeholderTextColor="#64748B"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Password"
                            placeholderTextColor="#64748B"
                            secureTextEntry
                        />

                        <Pressable style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.switchText}>
                                No account yet? <Text style={styles.link}>Register</Text>
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#090D16",
    },
    scrollContent: {
        flexGrow: 1,
    },
    topHalf: {
        minHeight: 220,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    bottomHalf: {
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "#090D16",
    },
    card: {
        backgroundColor: "#111827",
        borderWidth: 1,
        borderColor: "#1E293B",
        borderRadius: 14,
        padding: 18,
        gap: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#F8FAFC",
        textAlign: "center",
        marginBottom: 2,
    },
    input: {
        backgroundColor: "#090D16",
        borderWidth: 1,
        borderColor: "#334155",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 15,
        color: "#F8FAFC",
    },
    button: {
        backgroundColor: "#2563EB",
        paddingVertical: 11,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 2,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },
    switchText: {
        fontSize: 13,
        color: "#94A3B8",
        textAlign: "center",
        marginTop: 2,
    },
    link: {
        color: "#F8FAFC",
        fontWeight: "700",
    },
});