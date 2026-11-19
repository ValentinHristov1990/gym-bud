// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./navigation/TabsNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}
