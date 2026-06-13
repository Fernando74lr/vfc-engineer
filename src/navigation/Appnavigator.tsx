import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { LoginScreen } from '../screens/Login/Loginscreen';
import { JSX } from 'react/jsx-runtime';
import { RootStack } from './utils/AppNavigationUtils';

/**
 * Configures and renders the root app navigation stack.
 *
 * @return {JSX.Element} Navigation container with registered routes.
 */
export const AppNavigator = (): JSX.Element => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName="LoginScreen"
				screenOptions={{ headerShown: false }}
			>
				<RootStack.Screen name="LoginScreen" component={LoginScreen} />
				<RootStack.Screen name="HomeScreen" component={HomeScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
};
