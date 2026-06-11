import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login/Loginscreen';
import { JSX } from 'react/jsx-runtime';

/*
 * Appnavigator.tsx
 *
 * Configures the main navigation stack for the application.
 */
const Stack = createNativeStackNavigator();

/**
 * Configures and renders the root app navigation stack.
 *
 * @return {JSX.Element} Navigation container with registered routes.
 */
export const AppNavigator = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
