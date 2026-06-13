import { JSX, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLoginAction } from '../../services/login';
import { styles } from './styles/Loginscreen.styles';
import { useNavigation } from '@react-navigation/native';
import { handleSignIn } from './utils/LoginscreenUtils';
import { LoginHeader } from './components/LoginHeader';
import { LoginForm } from './components/LoginForm';
import { LoginButton } from './components/LoginButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/utils/AppNavigationUtils';
import { checkAuth } from '../../services/auth';

/**
 * Renders the login screen using the VFC mobile visual style.
 *
 * @return {JSX.Element} Login screen UI.
 */
export const LoginScreen = (): JSX.Element => {
	// State variables for form inputs and UI behavior
	const [email, setEmail] = useState<string>('flopezramirez@hotmail.com');
	const [password, setPassword] = useState<string>('Carnitas3$');
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [isCheckingSession, setIsCheckingSession] = useState<boolean>(true);

	// Login action hook provides state and handler for login flow
	const { executeLogin, isLoading } = useLoginAction();

	// Navigation hook
	const navigation =
		useNavigation<
			NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>
		>();

	useEffect(() => {
		let isMounted = true;

		const initializeAuthState = async (): Promise<void> => {
			const authenticatedUser = await checkAuth();

			if (authenticatedUser) {
				navigation.reset({
					index: 0,
					routes: [
						{
							name: 'HomeScreen',
							params: {
								userName: authenticatedUser.firstName,
							},
						},
					],
				});
				return;
			}

			if (isMounted) {
				setIsCheckingSession(false);
			}
		};

		void initializeAuthState();

		return () => {
			isMounted = false;
		};
	}, [navigation]);

	// Handler for sign-in button press
	const onSignInPress = (): void => {
		void handleSignIn(email, password, executeLogin, navigation);
	};

	if (isCheckingSession) {
		return (
			<SafeAreaView style={styles.screen}>
				<View style={styles.card}>
					<ActivityIndicator size="large" />
				</View>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.card}>
				{/* Header section */}
				<LoginHeader />

				{/* Form section */}
				<LoginForm
					email={email}
					password={password}
					setEmail={setEmail}
					setPassword={setPassword}
					isPasswordVisible={isPasswordVisible}
					setIsPasswordVisible={setIsPasswordVisible}
				/>

				{/* Sign-in button */}
				<LoginButton isLoading={isLoading} onPress={onSignInPress} />
			</View>
		</SafeAreaView>
	);
};
