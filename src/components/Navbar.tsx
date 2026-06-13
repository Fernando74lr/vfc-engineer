import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { MAIN_COLOR } from '../constants/colors';
import { styles } from './styles/Navbar.styles';
import { NavbarProps } from '../types/navbar';

export const Navbar = ({
	title,
	subtitle,
	onBack,
	rightActions = [],
}: NavbarProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftSection}>
				{onBack ? (
					<Pressable onPress={onBack} style={styles.iconButton}>
						<Ionicons name="chevron-back" size={20} color={MAIN_COLOR} />
					</Pressable>
				) : null}

				<View style={styles.titleContainer}>
					<Text style={styles.title}>{title}</Text>
					{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
				</View>
			</View>

			<View style={styles.rightSection}>
				{rightActions.map((action, index) => (
					<Pressable
						key={index}
						onPress={action.onPress}
						style={styles.iconButton}
					>
						{action.icon}
					</Pressable>
				))}
			</View>
		</View>
	);
};
