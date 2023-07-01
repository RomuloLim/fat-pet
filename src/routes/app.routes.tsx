import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Login } from '@screens/Login';
import { NewPet } from '@screens/NewPet';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="newPet"
                component={NewPet}
            />

            <Screen
                name="login"
                component={Login}
            />
        </Navigator>
    )
}