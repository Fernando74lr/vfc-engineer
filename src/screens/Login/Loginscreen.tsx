import { Ionicons } from '@expo/vector-icons';
import { JSX, useState } from 'react';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MAIN_COLOR } from '../../constants/colors';

const LOGO_SOURCE = require('../../../assets/icon.png');

/**
 * Renders the login screen using the VFC mobile visual style.
 *
 * @return {JSX.Element} Login screen UI.
 */
export const LoginScreen = (): JSX.Element => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	/**
	 * Handles primary sign-in action.
	 *
	 * @return {void}
	 */
	const handleSignIn = (): void => {
		console.log('Login pressed', {
			username,
			hasPassword: password.length > 0,
		});
	};

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.card}>
				<Image source={LOGO_SOURCE} style={styles.logo} resizeMode="contain" />

				<Text style={styles.title}>
					<Text style={styles.titleAccent}>VFC</Text> Engineer
				</Text>
				<Text style={styles.subtitle}>
					Herramientas internas para consultar informacion de ventas.
				</Text>

				<View style={styles.formSection}>
					<Text style={styles.label}>Usuario</Text>
					<View style={styles.inputRow}>
						<Ionicons
							name="person-outline"
							size={18}
							color={styles.icon.color}
						/>
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Ingresa tu usuario"
							placeholderTextColor="#98a2b3"
							style={styles.input}
							value={username}
							onChangeText={setUsername}
						/>
					</View>

					<Text style={styles.label}>Contrasena</Text>
					<View style={styles.inputRow}>
						<Ionicons
							name="lock-closed-outline"
							size={18}
							color={styles.icon.color}
						/>
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Ingresa tu contrasena"
							placeholderTextColor="#98a2b3"
							style={styles.input}
							value={password}
							onChangeText={setPassword}
							secureTextEntry={!isPasswordVisible}
						/>
						<Pressable
							hitSlop={8}
							onPress={() =>
								setIsPasswordVisible((previousValue) => !previousValue)
							}
						>
							<Ionicons
								name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
								size={18}
								color={styles.icon.color}
							/>
						</Pressable>
					</View>
				</View>

				<Pressable style={styles.button} onPress={handleSignIn}>
					<Text style={styles.buttonText}>Iniciar sesion</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#f1f3f6',
		justifyContent: 'center',
		paddingHorizontal: 16,
	},
	card: {
		backgroundColor: '#ffffff',
		borderRadius: 24,
		paddingHorizontal: 18,
		paddingVertical: 22,
		shadowColor: '#111827',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.06,
		shadowRadius: 20,
		elevation: 4,
	},
	logo: {
		width: 54,
		height: 54,
		marginBottom: 14,
	},
	title: {
		fontSize: 42,
		fontWeight: '700',
		color: '#111827',
		marginBottom: 10,
	},
	titleAccent: {
		color: MAIN_COLOR,
	},
	subtitle: {
		fontSize: 18,
		lineHeight: 27,
		color: '#6b7280',
		marginBottom: 26,
	},
	formSection: {
		gap: 10,
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		color: '#374151',
		fontWeight: '500',
	},
	inputRow: {
		height: 56,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#d0d5dd',
		backgroundColor: '#ffffff',
		paddingHorizontal: 12,
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
		marginBottom: 6,
	},
	icon: {
		color: '#94a3b8',
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: '#111827',
	},
	button: {
		height: 54,
		borderRadius: 14,
		backgroundColor: MAIN_COLOR,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 17,
		fontWeight: '700',
		color: '#ffffff',
	},
});
