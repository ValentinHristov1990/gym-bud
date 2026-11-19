import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkoutsNavigator from "./WorkoutsNavigator";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";
import MapScreen from "../screens/MapScreen";

const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="WorkoutsTab"
        component={WorkoutsNavigator}
        options={{ headerShown: false, title: "Workouts" }}
      />

      <Tabs.Screen
        name="Create"
        component={CreateWorkoutScreen}
        options={{ title: "Add Workout" }}
      />

      <Tabs.Screen
        name="MapTab"
        component={MapScreen}
        options={{ title: "Closest Gym" }}
      />
    </Tabs.Navigator>
  );
}