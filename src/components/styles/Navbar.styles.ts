import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../constants/colors';

/**
 * Provides styles for the navbar layout and controls.
 */
export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 18,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#D6D9DE',
		backgroundColor: '#FFFFFF',
	},
	leftSection: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	rightSection: {
		width: 48,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 4,
	},
	titleContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	iconButton: {
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 18,
	},
	title: {
		fontWeight: '700',
		fontSize: 23,
		color: MAIN_COLOR,
	},
	subtitle: {
		marginTop: 2,
		fontSize: 14,
		color: '#7A8794',
	},
});
