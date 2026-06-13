import { Ionicons } from '@expo/vector-icons';
import { JSX } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/Loginscreen.styles';
import { LoginFormProps } from '../../../types/login';

/**
 * Renders the login form section of the login screen, including 
 * email and password inputs with icons and visibility toggle.
 *
 * @param props Login form values and state handlers.
 * @returns {JSX.Element} Login form UI.
 */
export const LoginForm = ({
	email,
	password,
	setEmail,
	setPassword,
	isPasswordVisible,
	setIsPasswordVisible,
}: LoginFormProps): JSX.Element => (
	<View style={styles.formSection}>
		<Text style={styles.label}>Correo electrónico</Text>
		<View style={styles.inputRow}>
			<Ionicons name="person-outline" size={18} color={styles.icon.color} />
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
					setIsPasswordVisible((previousValue: boolean) => !previousValue)
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
);
