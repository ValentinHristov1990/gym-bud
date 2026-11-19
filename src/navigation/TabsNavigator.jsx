import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorkoutsNavigator from "./WorkoutsNavigator";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";
import MapScreen from "../screens/MapScreen";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="WorkoutsTab"
        component={WorkoutsNavigator}

        options={{
          headerShown: false,
          popToTopOnBlur: true,
          title: "Workouts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="Create"
        component={CreateWorkoutScreen}
        options={{
          title: "Add Workout",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="MapTab"
        component={MapScreen}
        options={{
          title: "Closest Gym",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}