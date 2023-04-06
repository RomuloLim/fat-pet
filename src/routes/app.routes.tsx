import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { NewPet } from '@screens/NewPet';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName='newPet'>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="newPet"
                component={NewPet}
            />
        </Navigator>
    )
}