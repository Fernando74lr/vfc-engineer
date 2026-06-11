import { Ionicons } from '@expo/vector-icons';
import { JSX, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLoginAction } from '../../services/login';
import { styles } from './styles/Loginscreen.styles';
import { LOGO_SOURCE } from '../../constants/images';

/**
 * Renders the login screen using the VFC mobile visual style.
 *
 * @return {JSX.Element} Login screen UI.
 */
export const LoginScreen = (): JSX.Element => {
	const [email, setEmail] = useState<string>('flopezramirez@hotmail.com');
	const [password, setPassword] = useState<string>('Carnitas3$');
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const { executeLogin, isLoading } = useLoginAction();

	/**
	 * Handles primary sign-in action.
	 *
	 * @return {void}
	 */
	const handleSignIn = async (): Promise<void> => {
		if (!email.trim() || !password.trim()) {
			Alert.alert(
				'Campos requeridos',
				'Completa correo electrónico y contraseña.'
			);
			return;
		}

		try {
			const loginResult = await executeLogin({ email, password });
			console.log('Login success', JSON.stringify(loginResult, null, 4));
		} catch (error) {
			const message =
				error instanceof Error
					? error.message
					: 'No fue posible iniciar sesión.';
			Alert.alert('Error de autenticación', message);
		}
	};

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.card}>
				<View style={styles.header}>
					<Image
						source={{ uri: LOGO_SOURCE }}
						style={styles.logo}
						resizeMode="contain"
					/>

					<Text style={styles.title}>
						<Text style={styles.titleAccent}>VFC</Text> Engineer
					</Text>
					<Text style={styles.subtitle}>Herramientas internas.</Text>
				</View>

				<View style={styles.formSection}>
					<Text style={styles.label}>Correo electrónico</Text>
					<View style={styles.inputRow}>
						<Ionicons
							name="person-outline"
							size={18}
							color={styles.icon.color}
						/>
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Ingresa tu correo electrónico"
							placeholderTextColor="#98a2b3"
							style={styles.input}
							value={email}
							onChangeText={setEmail}
						/>
					</View>

					<Text style={styles.label}>Contraseña</Text>
					<View style={styles.inputRow}>
						<Ionicons
							name="lock-closed-outline"
							size={18}
							color={styles.icon.color}
						/>
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							placeholder="Ingresa tu contraseña"
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
					<Text style={styles.buttonText}>
						{isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
					</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};
