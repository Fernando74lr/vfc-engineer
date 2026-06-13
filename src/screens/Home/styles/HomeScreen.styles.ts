import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../../constants/colors';

/**
 * Provides styles for the home screen layout and controls.
 */
export const styles = StyleSheet.create({
	container: {
		gap: 8,
	},
	header: {
		alignItems: 'center',
	},
	// homeView: {
	//     border: `1px solid ${MAIN_COLOR}`,
	// },
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: MAIN_COLOR,
	},
	subtitle: {
		fontSize: 16,
		color: MAIN_COLOR,
	},
});
