import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TabsNavigator from "./navigation/TabsNavigator";

const RootStack = createStackNavigator();

const GymBudTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#090D16",
    card: "#090D16",
  },
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#090D16" }}>
      <NavigationContainer theme={GymBudTheme}>
        <StatusBar style="light" />
        <RootStack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#090D16" },
          }}
        >
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
          <RootStack.Screen name="MainTabs" component={TabsNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}