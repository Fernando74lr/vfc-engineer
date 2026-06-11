import { Button } from 'react-native';
import { MAIN_COLOR } from '../constants/colors';
import { JSX } from 'react/jsx-runtime';
import { ButtonVFCProps } from '../types/button';

/**
 * Renders a reusable button with project default styling.
 *
 * @param {ButtonVFCProps} props Button configuration.
 * @return {JSX.Element} Native button element.
 */
export const ButtonVFC = ({
	action,
	title,
	hexColor = MAIN_COLOR,
}: ButtonVFCProps): JSX.Element => (
	<Button onPress={action} title={title} color={hexColor} />
);
