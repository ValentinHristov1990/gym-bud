import { createStackNavigator } from "@react-navigation/stack";


import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";
import EditWorkoutScreen from "../screens/EditWorkoutScreen";
import WorkoutScreen from "../screens/WorkoutScreen";

const Stack = createStackNavigator();
export default function WorkoutsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Workouts" component={WorkoutScreen} />
            <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
            <Stack.Screen name="EditWorkouts" component={EditWorkoutScreen} />
        </Stack.Navigator>
    );
}