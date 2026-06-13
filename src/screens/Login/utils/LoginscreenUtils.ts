import { Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/utils/AppNavigationUtils';
import {
	AuthUser,
	saveLoginSession,
	verifyToken,
} from '../../../services/auth';
import { UseLoginActionResult } from '../../../services/login';

type LoginScreenNavigation = NativeStackNavigationProp<
	RootStackParamList,
	'LoginScreen'
>;

const getNavigationUserName = (
	authenticatedUser: AuthUser,
	fallbackFirstName?: string
): string | undefined => {
	if (authenticatedUser.firstName) {
		return authenticatedUser.firstName;
	}

	return fallbackFirstName;
};

/**
 * Handles primary sign-in action.
 *
 * @return {void}
 */
export const handleSignIn = async (
	email: string,
	password: string,
	executeLogin: UseLoginActionResult['executeLogin'],
	navigation: LoginScreenNavigation
): Promise<void> => {
	// Validate required fields
	if (!email.trim() || !password.trim()) {
		// Show alert if either field is empty
		Alert.alert(
			'Campos requeridos',
			'Completa correo electrónico y contraseña.'
		);
		return;
	}

	try {
		// Attempt login and navigate on success
		const loginResult = await executeLogin({ email, password });
		const verifiedTokenData = await verifyToken(loginResult.token);

		if (!verifiedTokenData.user) {
			throw new Error('No fue posible verificar la sesión del usuario.');
		}

		await saveLoginSession(loginResult, verifiedTokenData.user);

		const userName = getNavigationUserName(
			verifiedTokenData.user,
			loginResult.firstName
		);

		// Navigate to home screen with user name parameter
		navigation.reset({
			index: 0,
			routes: [
				{
					name: 'HomeScreen',
					params: {
						userName,
					},
				},
			],
		});
	} catch (error) {
		// Show alert on login failure
		const message =
			error instanceof Error ? error.message : 'No fue posible iniciar sesión.';
		// Display error message in an alert dialog
		Alert.alert('Error de autenticación', message);
	}
};
