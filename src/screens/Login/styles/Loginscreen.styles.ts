import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../../constants/colors';

/**
 * Provides styles for the login screen layout and controls.
 */
export const styles = StyleSheet.create({
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
