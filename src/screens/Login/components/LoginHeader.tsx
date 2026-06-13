import { Image, Text, View } from 'react-native';
import { styles } from '../styles/Loginscreen.styles';
import { LOGO_SOURCE } from '../../../constants/images';
import { JSX } from 'react';

/**
 * Renders the login header section of the login screen, including
 * the logo and title.
 *
 * @returns {JSX.Element} Login header UI.
 */
export const LoginHeader = (): JSX.Element => (
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
);
