import { JSX } from 'react';
import { styles } from './styles/HomeScreen.styles';
import { View, Text } from 'react-native';
import { PrivateScreenLayout } from '../../components/PrivateScreenLayout';

export const HomeScreen = (): JSX.Element => {
	return (
		<PrivateScreenLayout title="VFC Engineer">
			<View style={styles.container}>
				<Text style={styles.title}>Bienvenido a VFC Engineer</Text>
				<Text style={styles.subtitle}>
					Selecciona una herramienta para comenzar.
				</Text>
			</View>
		</PrivateScreenLayout>
	);
};
