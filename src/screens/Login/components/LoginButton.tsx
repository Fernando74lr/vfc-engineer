import { JSX } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles/Loginscreen.styles';
import { LoginButtonProps } from '../../../types/login';

/**
 * Renders the primary sign-in button for the login screen.
 *
 * @param props Loading state and press handler.
 * @returns {JSX.Element} Login button UI.
 */
export const LoginButton = ({ isLoading, onPress }: LoginButtonProps): JSX.Element => (
	<Pressable style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>
			{isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
		</Text>
	</Pressable>
);