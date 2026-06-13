import { JSX, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navbar, NavbarAction } from './Navbar';

interface PrivateScreenLayoutProps {
	children: ReactNode;
	title: string;
	subtitle?: string;
	onBack?: () => void;
	rightActions?: NavbarAction[];
}

export const PrivateScreenLayout = ({
	children,
	title,
	subtitle,
	onBack,
	rightActions = [],
}: PrivateScreenLayoutProps): JSX.Element => {
	return (
		<SafeAreaView style={styles.screen}>
			<Navbar
				title={title}
				subtitle={subtitle}
				onBack={onBack}
				rightActions={rightActions}
			/>
			<View style={styles.content}>{children}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	content: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
});
