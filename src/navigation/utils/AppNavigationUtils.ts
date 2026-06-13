import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
	HomeScreen:
		| {
				userName?: string;
		  }
		| undefined;
	LoginScreen: undefined;
};

/*
 * AppNavigationUtils.ts
 *
 * Configures the main navigation stack for the application.
 */
export const RootStack = createNativeStackNavigator<RootStackParamList>();
